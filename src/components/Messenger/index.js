import React, { useContext } from 'react';
import { Box } from "@chakra-ui/react"
import Sidebar from 'components/Sidebar';
import Conversation from 'components/Conversation';
import CreateConversation from 'components/CreateConversation'
import './messenger.css';
import { UserActionsContext } from "context/useractions"

export default function Messenger() {
  const userAction = useContext(UserActionsContext)

  return (
    <div className="messenger">
      <div className="scrollable sidebar">
        <Sidebar />
      </div>

      <Box overflow="hidden">
        {
          userAction?.state?.createNewConvo ? 
            <CreateConversation />
          : <Conversation />
        }
      </Box>
    </div>
  );
}