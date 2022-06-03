import { useContext } from "react"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import { Authenticator } from '@aws-amplify/ui-react';
import { MessengerContext } from "context/messenger"
import { API, graphqlOperation } from 'aws-amplify'
import { deleteUser } from "graphql/mutations"

export const SettingsMenu = () => {
  const messenger = useContext(MessengerContext)
  const navigage = useNavigate()

  const handleDelete = async (signOut) => {
    const message = await API.graphql(graphqlOperation(deleteUser, { input: { id: messenger?.data?.user?.me?.id } }))
    console.log('--- deleteUser', message)
    signOut()
  }

  return (
    <Authenticator signUpAttributes={[]}>
      {({ signOut, user }) => (
        <Menu>
          <MenuButton>
            <img className="conversation-photo" src="https://picsum.photos/200/300" alt="conversation" />
          </MenuButton>
          <MenuList>
            <MenuGroup title={ user && user.username }>
              <MenuItem onClick={() => navigage("/app/profile")}>Profile</MenuItem>
              <MenuItem onClick={() => handleDelete(signOut)}>Delete Account</MenuItem>
              <MenuItem onClick={() => {
                localStorage.removeItem("auth-pool")
                signOut()
              }}>Logout</MenuItem>
            </MenuGroup>
          </MenuList>
        </Menu>
      )}
      
    </Authenticator>
    
  )
}