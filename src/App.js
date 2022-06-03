import React from 'react';
import { Navigate } from 'react-router-dom';
import { Auth, Hub } from 'aws-amplify';
import Messenger from "components/Messenger"

function App() {
  const [user, updateUser] = React.useState(null);
  React.useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(user => updateUser(user))
      .catch((e) => {
        console.log('e', e)
      });
      Hub.listen('auth', data => {
      switch (data.payload.event) {
        case 'signIn':
          return updateUser(data.payload.data);
        case 'signOut':
          return updateUser(null);
        default: break;
      }
    });
  }, []);

  if (user) {
    return <Messenger />
  }

  return (<Navigate to="/" />)
}


export default App