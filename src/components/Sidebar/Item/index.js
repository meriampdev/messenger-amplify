import React from 'react'
import './item.css';
import {
  Box, 
  Button,
  Icon,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure
} from '@chakra-ui/react'
import { SmallCloseIcon } from "@chakra-ui/icons"
import { API, graphqlOperation } from 'aws-amplify';
import { 
  deleteUserConversation,
} from "graphql/mutations"

export default function ConversationItem(props) {
  const { showOptions } = props
  const { photo, displayName, text, conversation, id } = props.data;
  const { isOpen, onOpen, onClose } = useDisclosure()
  const cancelRef = React.useRef()

  const handleDelete = async (e) => {
    e?.stopPropagation()

    try {
      await API.graphql(graphqlOperation(deleteUserConversation, { input: { id } }))
      // if(conversation?.id) {
      //   let one = await API.graphql(graphqlOperation(deleteUserConversationWhere, { filter: { conversationId: { eq: conversation?.id } } } ))
      //   console.log('one', one)
      //   if(one?.data) {
      //     let two = await API.graphql(graphqlOperation(deleteMessagesWhere, { filter: { conversationId: { eq: conversation?.id } } } ))
      //     console.log('two', two)
      //     let three = await API.graphql(graphqlOperation(deleteConversation, { input: { id: conversation?.id } }))
      //     console.log('three', three)
      //   }
        
      // } else {
      //   await API.graphql(graphqlOperation(deleteUserConversation, { input: { id } }))
      // }
      
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
      <img className="conversation-photo" src={photo ?? "https://picsum.photos/200/300?random=1"} alt="conversation" />
      <div className="conversation-info">
        <h1 className="conversation-title">{ displayName }</h1>
        <p className="conversation-snippet">{ text }</p>
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
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Delete Conversation
            </AlertDialogHeader>

            <AlertDialogBody>
              Are you sure? You can't undo this action afterwards.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='red' onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}