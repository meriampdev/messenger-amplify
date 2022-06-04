import { useContext } from "react"
import {
  Avatar,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  useDisclosure
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import { Authenticator } from '@aws-amplify/ui-react';
import { Alert } from "components/Alert"
import { MessengerContext } from "context/messenger"
import { API, graphqlOperation } from 'aws-amplify'
import { deleteUser } from "graphql/mutations"

export const SettingsMenu = () => {
  const messenger = useContext(MessengerContext)
  const navigage = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleDelete = async (signOut) => {
    await API.graphql(graphqlOperation(deleteUser, { input: { id: messenger?.data?.user?.me?.id } }))
    signOut()
  }

  return (
    <Authenticator signUpAttributes={[]}>
      {({ signOut, user }) => (
        <Box pos="relative" zIndex={1000000000}>
          <Menu zIndex={1000000000}>
            <MenuButton>
              {/* <img className="conversation-photo" src="https://picsum.photos/200/300" alt="conversation" /> */}
              <Avatar 
                name={messenger?.data?.user?.username}
                className="conversation-photo"
              />
            </MenuButton>
            <MenuList>
              <MenuGroup title={ user && user.username }>
                <MenuItem onClick={() => navigage("/profile")}>Profile</MenuItem>
                <MenuItem onClick={onOpen}>Delete Account</MenuItem>
                <MenuItem onClick={() => {
                  localStorage.removeItem("auth-pool")
                  signOut()
                }}>Logout</MenuItem>
              </MenuGroup>
            </MenuList>
          </Menu>
          <Alert 
            isOpen={isOpen}
            onClose={onClose}
            title="Delete Account"
            content="Are you sure? You can't undo this action afterwards."
            actionText="Delete"
            okHandler={() => handleDelete(signOut)}
          />
        </Box>
      )}
    </Authenticator>
    
  )
}