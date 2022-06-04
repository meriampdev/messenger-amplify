import React from "react"
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth, Hub } from 'aws-amplify';
import App from "App"
import { Login } from "Login"
import { Profile } from "components/Profile"
import { MessengerProvider } from "context/messenger"
import { UserActionsProvider } from "context/useractions"

export default function Landing() {
  const [user, updateUser] = React.useState(null);

  React.useEffect(() => {
    if(!!Auth?.userPool) {
      Auth.currentAuthenticatedUser()
        .then(user => updateUser(user))
        .catch((e) => {
          console.log('No signed in user.', e)
        });
        
      authListen()
    }
    
  }, []);

  const authListen = () => {
    Hub.listen('auth', data => {
      switch (data.payload.event) {
        case 'signIn':
          return updateUser(data.payload.data);
        case 'signOut':
          return updateUser(null);
        default: break;
      }
    });
  }

  if (user) {
    return (
      <MessengerProvider user={user} >
        <UserActionsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </BrowserRouter>
        </UserActionsProvider>
      </MessengerProvider>
    )
  }

  return <Login authListen={authListen} />
}