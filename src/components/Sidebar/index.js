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
  onUserConversationUpdate
} from "graphql/subscriptions"

export default function Sidebar(props) {
  const messenger = useContext(MessengerContext)
  const [conversations, setConversations] = useState([]);
  const [active, setActive] = useState(0)
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
      messenger?.setCurrentConvo(conversations[0])
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

    let subUpdate = API.graphql({
      query: onUserConversationUpdate,
      variables: { email: userEmail }
    })
    .subscribe({
      next: roomData => {
        let convo = roomData?.value?.data?.onUserConversationUpdate
        console.log('onUserConversationUpdate', convo)
        setConversations(prev => {
          return prev.map(item => {
            return item.id === convo?.id ? convo : item
          })
        })
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
      subUpdate.unsubscribe();
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
              key={conversation.id}
              me={userEmail}
              active={i === active}
              data={{ ...conversation, text}}
              showOptions={true}
              onClick={() => {
                setActive(i)
                messenger?.setCurrentConvo(conversation)
              }}
            />
          )
        })
      }
    </div>
  );
}