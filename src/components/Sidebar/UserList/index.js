import { useContext } from 'react';
import { IconButton } from '@chakra-ui/react'
import { UserActionsContext } from "context/useractions"
import { EditIcon } from '@chakra-ui/icons'

export const UserList = () => {
  const userAction = useContext(UserActionsContext)

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
}