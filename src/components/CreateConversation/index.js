import React, {useContext, useRef} from 'react';
import './conversation.css';
import { Recipient } from "./Recipient"
import Compose from 'components/Compose';
import ToolbarButton from 'components/ToolbarButton';
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
      let conversation
      if(check?.data?.listConversations?.items?.length <= 0) {
        conversation = await API.graphql(graphqlOperation(createConversation, { input: convo }))
      } else {
        let existing = check?.data?.listConversations?.items[0]
        let payload = { ...convo, id: existing?.id }
        conversation = await API.graphql(graphqlOperation(updateConversation, { input: payload }))
      }

      const conversationId = conversation?.data?.createConversation?.id ?? conversation?.data?.updateConversation?.id
      const messageData = {
        conversationId: conversationId,
        content: content,
        type: "text",
        authorId: messenger?.data?.user?.me?.id
      }

      const message = await API.graphql(graphqlOperation(createMessage, { input: messageData }))

      const linkToUsers = members.map((member) => {
        let others = members.filter((f) => f !== member)
        let nameArr = others?.map((other) => other?.split("@")[0])
        let displayName = nameArr.join()
        let input = {
          conversationId: conversationId,
          email: member,
          displayName: displayName,
          recentMessageId: message?.data?.createMessage?.id
        }
        return API.graphql(graphqlOperation(createUserConversation, { input: input }))
      })
      
      await Promise.all(linkToUsers)
      userAction.handleSetState({ createNewConvo: false })
    } catch (err) {
      console.log('error creating room: ', err);
    }
  }

  return(
    <div id="message-list" className="message-list">
      <Recipient ref={recipientRef} />

      <div className="message-list-container"></div>

      <Compose 
        handleSend={handleSend}
        rightItems={[
          <ToolbarButton key="image" icon="ion-ios-images" />,
          <ToolbarButton key="emoji" icon="ion-ios-happy" />
        ]}
      />
    </div>
  );
}