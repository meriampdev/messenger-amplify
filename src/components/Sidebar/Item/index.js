import React, { useEffect, useState, useContext } from 'react'
import './item.css';
import {
  Box, 
  Icon,
  Avatar,
  useDisclosure
} from '@chakra-ui/react'
import { SmallCloseIcon } from "@chakra-ui/icons"
import { Alert } from "components/Alert"
import { MessengerContext } from "context/messenger"
import { API, graphqlOperation } from 'aws-amplify';
import { deleteUserConversation } from "graphql/mutations"
import { onUpdateConversation } from "graphql/subscriptions"

export default function ConversationItem(props) {
  const { showOptions } = props
  const messenger = useContext(MessengerContext)
  const me = messenger?.data?.user?.me
  const { displayName, id, conversation } = props.data;
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [recent, setRecent] = useState(conversation?.recentMessage?.content)


  useEffect(() => {
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
          messenger.setCurrentConvo(messageData?.value?.data?.onUpdateConversation)
          console.log('tab', messenger?.data?.appState?.activeTab)
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

  }, [conversation, messenger])

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
        <h1 className="conversation-title">{ displayName }</h1>
        <Box 
          as="p"
          className="conversation-snippet" 
          dangerouslySetInnerHTML={{ __html: recent }}
        />
      </div>
      {showOptions && 
        <Box
          justifySelf="flex-end"
          borderRadius="5px"
          boxSize="2vw"
          display="flex"
          alignItems="center"
          justifyContent="center"
          _hover={{ bg: "#e4e4e4" }}
          onClick={onOpen}
        >
          <Icon as={SmallCloseIcon} w={4} h={4} color="red" />
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