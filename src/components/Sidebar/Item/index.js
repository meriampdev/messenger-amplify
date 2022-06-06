import React from 'react'
import './item.css';
import {
  Box, 
  Icon,
  Avatar,
  useDisclosure
} from '@chakra-ui/react'
import { SmallCloseIcon } from "@chakra-ui/icons"
import { API, graphqlOperation } from 'aws-amplify';
import { deleteUserConversation } from "graphql/mutations"
import { Alert } from "components/Alert"

export default function ConversationItem(props) {
  const { showOptions } = props
  const { displayName, text, id } = props.data;
  const { isOpen, onOpen, onClose } = useDisclosure()

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
          dangerouslySetInnerHTML={{ __html: text }}
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