import React, { useEffect, useState, useContext } from 'react'
import './item.css';
import {
  Box, 
  Icon,
  Avatar,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { SmallCloseIcon } from "@chakra-ui/icons"
import { Alert } from "components/Alert"
import { MessengerContext } from "context/messenger"
import { API, graphqlOperation } from 'aws-amplify';
import { deleteUserConversation } from "graphql/mutations"
import { listMessages } from "graphql/queries"
import { onUpdateConversation } from "graphql/subscriptions"

export default function ConversationItem(props) {
  const { showOptions, data } = props
  const messenger = useContext(MessengerContext)
  const me = messenger?.data?.user?.me
  const { displayName, id, conversation } = props.data;
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [recent, setRecent] = useState(conversation?.recentMessage?.content)
  const [unread, setUnreadCount] = useState(0)

  useEffect(() => {
    getUnread()
    let subscription = API.graphql({
      query: onUpdateConversation,
      variables: {
        id: conversation?.id 
      }
    })
    .subscribe({
      next: messageData => {
        const { id, recentMessage } = messageData?.value?.data?.onUpdateConversation
        if(conversation?.id === id) {
          if(unread > 0) {
            getUnread()
          }
          if (!messenger?.data?.appState?.activeTab && Notification.permission === "granted") {
            if(me?.id !== recentMessage?.author?.id) {
              const title = `New Message from ${recentMessage?.author?.username}`
              const body = recentMessage?.content
              new Notification(title, { body });
            }
          }
      
          setRecent(recentMessage?.content)
        } 
      }
    })

    return () => subscription && subscription.unsubscribe();

  // eslint-disable-next-line
  }, [conversation, messenger])

  const getUnread = async () => {
    
    let res = await API.graphql(graphqlOperation(listMessages, 
        { 
          filter: { 
            and: [
              {conversationId: {eq: data?.conversationId}},
              {read: { ne: true }}
            ]
          } 
        }))
    if(res?.data?.listMessages?.items?.length > 0) {
      setUnreadCount(res?.data?.listMessages?.items?.length)
    } else {
      setUnreadCount(0)
    }
  }

  const handleDelete = async (e) => {
    e?.stopPropagation()

    try {
      await API.graphql(graphqlOperation(deleteUserConversation, { input: { id } }))
      onClose()
    } catch(e) {
      console.log('error Delete Conversation', e)
    }
  }

  return (
    <div 
      onClick={props?.onClick}
      className={`conversation-list-item ${props.active ? 'active': ''}`}
    >
      <Avatar 
        name={displayName}
        className="conversation-photo"
        position="unset"
      />
      <div className="conversation-info">
        <Text 
          className="conversation-title"
          fontWeight={unread > 0 ? 'bold' : 'medium'}
          whiteSpace="nowrap"
          overflow="hidden"
          textOverflow="ellipsis"
        >
          { displayName }
        </Text>
        <Box 
          as="p"
          className="conversation-snippet" 
          fontWeight={unread > 0 ? 'bold' : 'medium'}
          dangerouslySetInnerHTML={{ __html: recent }}
        />
      </div>
      {showOptions && 
        <Box
          className="delete-chat-btn"
          justifySelf="flex-end"
          borderRadius="5px"
          boxSize="2vw"
          display="flex"
          alignItems="center"
          justifyContent="center"
          onClick={onOpen}
          _hover={{ bg: "#e4e4e4" }}
        >
          <Icon as={SmallCloseIcon} w={4} h={4} color="red" />
        </Box>
      }
      {unread > 0 && 
        <Box 
          boxSize={5} 
          bg="blue.400" 
          borderRadius="full" 
          color="#FFF" 
          fontSize={9}
          fontWeight="bold"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {unread}
        </Box>
      }
      <Alert 
        isOpen={isOpen}
        onClose={onClose}
        title="Delete Conversation"
        content="Are you sure? You can't undo this action afterwards."
        actionText="Delete"
        okHandler={handleDelete}
      />
    </div>
  );
}