import React, {useState, useEffect, useContext} from 'react';
import './sidebar.css';
import Search from 'components/Sidebar/Search';
import ConversationItem from 'components/Sidebar/Item';
import Toolbar from 'components/Toolbar';
import { SettingsMenu } from "./SettingsMenu"
import { UserList } from "./UserList"
import { API, graphqlOperation } from 'aws-amplify'
import { MessengerContext } from "context/messenger"
import { UserActionsContext } from "context/useractions"
import { conversationByEmail } from "graphql/queries"
import { 
  onUserConversationCreate,
  onUserConversationDelete,
} from "graphql/subscriptions"

export default function Sidebar(props) {
  const messenger = useContext(MessengerContext)
  const userAction = useContext(UserActionsContext)
  const [conversations, setConversations] = useState([]);
  const userEmail = messenger?.data?.user?.attributes?.email
  const myId = messenger?.data?.user?.me?.id

  useEffect(() => {
    if(!!userEmail) {
      getConversations()
    }
  // eslint-disable-next-line
  }, [userEmail])

  const getConversations = async () => {
    let res = await API.graphql(graphqlOperation(conversationByEmail, 
      { 
        email: userEmail, 
        limit: 10, 
        sortDirection: "DESC" 
      }
    ))

    if(res?.data?.conversationByEmail?.items?.length > 0) {
      setConversations(res?.data?.conversationByEmail?.items)
    } else {
      setConversations([])
    }
  }

  useEffect(() => {
    if(conversations?.length > 0) {
      messenger?.setCurrentConvo(conversations[0].conversation)
    }
  // eslint-disable-next-line
  }, [conversations])

  useEffect(() => {
    let subscription = API.graphql({
      query: onUserConversationCreate,
      variables: { email: userEmail }
    })
    .subscribe({
      next: roomData => {
        setConversations(prevState => ([roomData?.value?.data?.onUserConversationCreate, ...prevState]))
      }
    })

    let subDelete = API.graphql({
      query: onUserConversationDelete,
      variables: { email: userEmail }
    })
    .subscribe({
      next: roomData => {
        let convo = roomData?.value?.data?.onUserConversationDelete
        setConversations(prevState => prevState?.filter((f) => f?.id !== convo?.id ))
      }
    })
    return () => {
      subscription.unsubscribe();
      subDelete.unsubscribe();
    }
  }, [userEmail]);

  return (
    <div className="conversation-list">
      <div className="conversation-list-tools">
        <Toolbar
          title="Chats"
          leftItems={[
            <SettingsMenu key="setting-menu" />
          ]}
          rightItems={[
            <UserList key="user-list" />
          ]}
        />
        <Search />
      </div>
      {
        conversations.map((conversation, i) => {
          let recent = conversation?.recentMessage
          let text = `${recent?.authorId === myId ? 'You: ' : ''} ${recent?.content}`
          return (
            <ConversationItem
              key={conversation?.id}
              me={userEmail}
              active={conversation?.conversationId === messenger?.data?.currentConvo?.id}
              data={{ ...conversation, text}}
              showOptions={true}
              onClick={() => {
                userAction.handleSetState({ createNewConvo: false })
                messenger?.setCurrentConvo({ 
                  ...conversation?.conversation, 
                  messages: conversation?.messages
                })
              }}
            />
          )
        })
      }
    </div>
  );
}