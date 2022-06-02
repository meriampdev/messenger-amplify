import { useState, useEffect, createContext } from "react"
import { API, graphqlOperation } from 'aws-amplify'
import { listUsers as GetUser } from "graphql/queries"
import { createUser as createUserMutation } from "graphql/mutations"

export const MessengerContext = createContext(null);

export const MessengerProvider = ({ user, children }) => {
  const [currentConvo, setConvoId] = useState("");
  const [userData, setUserData] = useState(user?.user)

  useEffect(() => {
    if(user?.user?.username) {
      let email = user?.user?.username 
      checkIfUserExists(email)
    }
  }, [])

  const checkIfUserExists = async (username) => {
    try {
      // await API.graphql(graphqlOperation(deleteUser, { input: { id:  }, filter: { username: { eq: username } } }))
      const _user = await API.graphql(graphqlOperation(GetUser, { filter: { username: { eq: username } } }))
      const { listUsers } = _user?.data
      if (!listUsers || listUsers?.items?.length <= 0) {
        console.log('will create')
        createUser(username)
      } else {
        console.log('me:', listUsers)
      }
    } catch (err) {
      console.log('error fetching user: ', err)
    }
  }

  const createUser = async (username) => {
    try {
      await API.graphql(graphqlOperation(createUserMutation, { input: { username } }))
    } catch (err) {
      console.log('Error creating user! :', err)
    }
  }

  const setCurrentConvo = (value) => {
    if (value) {
      setConvoId(value);
    } else {
      setConvoId("");
    }
  };

  return (
    <>
      <MessengerContext.Provider value={{ data: { currentConvo, user: userData }, setCurrentConvo }}>
        {children}
      </MessengerContext.Provider>
    </>
  );
};
