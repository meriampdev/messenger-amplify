import React from 'react';
import { Center } from "@chakra-ui/react"
import { Authenticator } from '@aws-amplify/ui-react';
import "@aws-amplify/ui-react/styles.css";
import { Auth, Hub } from 'aws-amplify';
import { Route, Routes } from 'react-router-dom';
import { MessengerProvider } from "context/messenger"
import Messenger from "components/Messenger"

function Router(user) {
  return (
    <MessengerProvider user={user} >
        <Routes>
          <Route exact path="/" element={<Messenger />} />
        </Routes>
    </MessengerProvider>
  )
}

function App() {
  const [user, updateUser] = React.useState(null);
  React.useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => updateUser(user))
      .catch(() => console.log('No signed in user.'));
      Hub.listen('auth', data => {
      switch (data.payload.event) {
        case 'signIn':
          return updateUser(data.payload.data);
        case 'signOut':
          return updateUser(null);
      }
    });
  }, []);
  if (user) {
    return <Router user={user} />
  }
  return (
    <Center h="100vh">
      <Authenticator hideSignUp={true} />
    </Center>
  )
}


export default App