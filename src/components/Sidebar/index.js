import React, {useState, useEffect, useContext} from 'react';
import Search from 'components/Sidebar/Search';
import ConversationItem from 'components/Sidebar/Item';
import Toolbar from 'components/Toolbar';
import { SettingsMenu } from "./SettingsMenu"
import { UserList } from "./UserList"
import './sidebar.css';
import { API } from 'aws-amplify'
import { MessengerContext } from "context/messenger"
import { 
  onUserConversationCreate,
  onUserConversationDelete,
} from "graphql/subscriptions"

export default function Sidebar(props) {
  const messenger = useContext(MessengerContext)
  const [conversations, setConversations] = useState([]);
  const userEmail = messenger?.data?.user?.attributes?.email
  const myId = messenger?.data?.user?.me?.id

  useEffect(() => {
    if(conversations?.length <= 0 && messenger?.data?.user?.me?.conversations?.items?.length > 0) {
      let items = messenger?.data?.user?.me?.conversations?.items
      let sorted = items.sort(function(a, b) {
        var c = new Date(a.updatedAt);
        var d = new Date(b.updatedAt);
        return c-d;
      });
      setConversations(sorted.reverse())
    }
  // eslint-disable-next-line
  }, [messenger?.data])

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