import React, {useContext, useRef} from 'react';
import './conversation.css';
import { Recipient } from "./Recipient"
import Compose from 'components/Compose';
import { MessengerContext } from "context/messenger"
import { UserActionsContext } from "context/useractions"
import { API, graphqlOperation } from 'aws-amplify';
import { listConversations } from "graphql/queries"
import { 
  createConversation, 
  updateConversation,
  createMessage,
  createUserConversation
} from 'graphql/mutations';
import { arrayIsSame } from "utils/arrayHelpers"

export default function Conversation(props) {
  const messenger = useContext(MessengerContext)
  const userAction = useContext(UserActionsContext)
  const recipientRef = useRef();

  const generateConvoName = (recipients) => {
    let list = recipients?.map((item) => {
      let username = item?.split('@')
      return username[0]
    })

    return list.join()
  }
  const handleSend = async (content) => {
    let userEmail = messenger?.data?.user?.attributes?.email
    let recipients = recipientRef.current?.getRecipients()
    let members = [...recipients, userEmail]
    let convoName = generateConvoName(recipients)
    
    try {
      const convo = { 
        name: convoName, 
        members: members,
        initiator: userEmail
      }

      let conditions = members.map((member) => {
        return { members: { contains: member } }
      }) 
      let filters = { filter: { and: conditions } }

      const check = await API.graphql(graphqlOperation(listConversations, filters))
      let conversationId
      let isExisting = false
      const { items: foundItems } = check?.data?.listConversations
      let foundSame = false 
      let existing = null
      foundItems?.forEach((item) => {
        if(arrayIsSame(item?.members, members)) {
          foundSame = true
          existing = item
        }
      })

      if(!foundSame || foundItems?.length <= 0) {
        let conversation = await API.graphql(graphqlOperation(createConversation, { input: convo }))
        conversationId = conversation?.data?.createConversation?.id
      } else {
        isExisting = true
        conversationId = existing?.id
      }

      const messageData = {
        conversationId: conversationId,
        content: content,
        type: "text",
        authorId: messenger?.data?.user?.me?.id,
        read: false
      }
      let message = await API.graphql(graphqlOperation(createMessage, { input: messageData }))
      let payload = { id: conversationId, recentMessageId: message?.data?.createMessage?.id }
      API.graphql(graphqlOperation(updateConversation, { input: payload }))

      if(!isExisting) {
        const linkToUsers = members.map((member) => {
          let others = members.filter((f) => f !== member)
          let nameArr = others?.map((other) => other?.split("@")[0])
          let displayName = nameArr.join()
          let input = {
            conversationId: conversationId,
            email: member,
            displayName: displayName,
          }
          return API.graphql(graphqlOperation(createUserConversation, { input: input }))
        })
        
        Promise.all(linkToUsers)
      }
     
      userAction.handleSetState({ createNewConvo: false })
    } catch (err) {
      console.log('error creating room: ', err);
    }
  }

  return(
    <div id="message-list" className="message-list">
      <Recipient ref={recipientRef} />

      <div className="message-list-container"></div>

      <Compose handleSend={handleSend} />
    </div>
  );
}