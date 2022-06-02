import React, {useState, useEffect, useContext} from 'react';
import Search from 'components/Sidebar/Search';
import ConversationItem from 'components/Sidebar/Item';
import Toolbar from 'components/Toolbar';
import { SettingsMenu } from "./SettingsMenu"
import { UserList } from "./UserList"
import './sidebar.css';
import { API, graphqlOperation } from 'aws-amplify'
import { MessengerContext } from "context/messenger"
import { listConversations as GetConversations } from "graphql/queries"
import { onConversationCreated } from "graphql/subscriptions"

export default function Sidebar(props) {
  const messenger = useContext(MessengerContext)
  const [conversations, setConversations] = useState([]);
  const [active, setActive] = useState(0)
  

  useEffect(() => {
    fetchRooms(messenger?.data?.user?.username);
    let subscription = API.graphql({
      query: onConversationCreated
    })
    .subscribe({
      next: roomData => {
        console.log('onConversationCreated subscription')
        console.log({ roomData });
        if(roomData?.value?.data?.onConversationCreated?.members?.includes(messenger?.data?.user?.username)) {
          setConversations(prevState => prevState.concat([roomData?.value?.data?.onConversationCreated]))
        }
      }
    })
    return () => subscription.unsubscribe();
  }, []);

  async function fetchRooms(username) {
    try {
      const convos = await API.graphql(graphqlOperation(GetConversations, { filter: { members: { contains: username } } }))
      console.log('convos', convos)
      if(convos?.data?.listConversations?.items?.length > 0) {
        setConversations(convos?.data?.listConversations?.items)
      }
    } catch (err) {
      console.log('error: ', err)
    }
  }

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
        conversations.map((conversation, i) =>
          <ConversationItem
            key={conversation.createdAt}
            me={messenger?.data?.user?.username}
            active={i === active}
            data={conversation}
            onClick={() => {
              setActive(i)
              messenger?.setCurrentConvo(conversation?.id)
            }}
          />
        )
      }
    </div>
  );
}