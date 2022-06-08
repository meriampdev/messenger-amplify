import React, { useEffect, useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Auth, Hub } from 'aws-amplify';
import Messenger from "components/Messenger"
import { MessengerContext } from "context/messenger"

function App() {
  const messenger = useContext(MessengerContext)
  const [user, updateUser] = React.useState(null);

  useEffect(() => {
    handleActiveTab()
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

    return () => {
      document.removeEventListener('visibilitychange')
    }
  // eslint-disable-next-line
  }, []);

  const handleActiveTab = () => {
    document.addEventListener('visibilitychange', function (event) {
      if (document.hidden) {
          console.log('not visible');
          messenger.setAppState({ activeTab: false })
      } else {
          console.log('is visible');
          messenger.setAppState({ activeTab: true })
      }
    });
  }

  if (user) {
    return <Messenger />
  }

  return (<Navigate to="/" />)
}


export default App