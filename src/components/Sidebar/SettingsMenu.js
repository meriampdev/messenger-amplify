import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
} from '@chakra-ui/react'
import { Authenticator } from '@aws-amplify/ui-react';

export const SettingsMenu = () => {
  return (
    <Authenticator signUpAttributes={[]}>
      {({ signOut, user }) => (
        <Menu>
          <MenuButton>
            <img className="conversation-photo" src="https://picsum.photos/200/300" alt="conversation" />
          </MenuButton>
          <MenuList>
            <MenuGroup title={ user && user.username }>
              <MenuItem>My Account</MenuItem>
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