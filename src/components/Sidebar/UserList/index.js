import { useEffect, useState, useContext } from 'react';
import {
  IconButton,
  useDisclosure
} from '@chakra-ui/react'
import { API, graphqlOperation } from 'aws-amplify';
import { listConversations } from "graphql/queries"
import { createConversation, deleteConversation } from 'graphql/mutations';
import { MessengerContext } from "context/messenger"
import { UserActionsContext } from "context/useractions"
import { EditIcon } from '@chakra-ui/icons'

export const UserList = () => {
  const messenger = useContext(MessengerContext)
  const userAction = useContext(UserActionsContext)
  const { onOpen, onClose, isOpen } = useDisclosure()
  const [users, setUsers] = useState([]);
  const [inputValue, setValue] = useState("")
  const username = messenger?.data?.user?.username

  useEffect(() => {
    getUsers()
  }, [])

  const getUsers = async () => {
   
  }

  const onCreateRoom = async () => {
    try {
      const convo = { 
        name: inputValue, 
        members: [inputValue, username],
        initiator: username
      }
      const check = await API.graphql(graphqlOperation(listConversations, { filter: { and: [{ members: { contains: inputValue } }, { members: { contains: username } }] }}))
      if(check?.data?.listConversations?.items?.length <= 0) {
        const conversation = await API.graphql(graphqlOperation(createConversation, { input: convo }))
        console.log('--- createConversation', conversation)
      } 
      
      setValue("")
      onClose()
    } catch (err) {
      console.log('error creating room: ', err);
    }
  }

  const onSelectContact = async (user) => {
    let loginData = localStorage.getItem('loginData')
    let owner = JSON.parse(loginData)
  }

  const handleNew = () => {
    userAction.handleSetState({ createNewConvo: true })
  }

  return (
    <IconButton 
      colorScheme='green' 
      size='sm' 
      icon={<EditIcon />} 
      onClick={handleNew}
    />
  )

  // return (
  //   <Popover
  //     isOpen={isOpen}
  //     onOpen={onOpen}
  //     onClose={onClose}
  //     placement="bottom-start"
  //     closeOnBlur={false}
  //   >
  //     <PopoverTrigger>
  //       <IconButton colorScheme='green' size='sm' icon={<EditIcon />} />
  //     </PopoverTrigger>
  //     <PopoverContent p={5}>
  //       <PopoverArrow />
  //       <PopoverCloseButton />
  //       <Box pt="1vw">
  //         <Input 
  //           placeholder="To:" 
  //           value={inputValue}
  //           onChange={(e) => setValue(e?.target?.value)}
  //           onKeyDown={(e) => {
  //             if(e?.key === "Enter") {
  //               onCreateRoom()
  //             }
  //           }}
  //         />
  //       </Box>
  //       <Box>
  //         {users?.map((user) => {
  //           return (
  //             <ConversationItem
  //               key={user.name}
  //               data={user}
  //               onClick={() => onSelectContact(user)}
  //             />
  //           )
  //         })}
  //       </Box>
  //     </PopoverContent>
  //   </Popover>
  // )
}