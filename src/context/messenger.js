import { useState, useEffect, createContext } from "react"
import { API, graphqlOperation } from 'aws-amplify'
import { userByEmail as GetUser } from "graphql/queries"
import { createUser as createUserMutation } from "graphql/mutations"

export const MessengerContext = createContext(null);

export const MessengerProvider = ({ user, children }) => {
  const [currentConvo, setConvoId] = useState("");
  const [userData, setUserData] = useState(user)

  useEffect(() => {
    if(user?.username) {
      let username = user?.username 
      let email = user?.attributes?.email
      checkIfUserExists(username, email)
    }
  // eslint-disable-next-line
  }, [])

  const checkIfUserExists = async (username, email) => {
    try {
      const _user = await API.graphql(graphqlOperation(GetUser, { email }))
      const { userByEmail } = _user?.data
      if (!userByEmail || userByEmail?.items?.length <= 0) {
        console.log('will create')
        createUser(username, email)
      } else {
        let me = userByEmail?.items[0]
        setUserData(prevState => ({ ...prevState, me: me }))
      }
    } catch (err) {
      console.log('error fetching user: ', err)
    }
  }

  const createUser = async (username, email) => {
    try {
      let me = await API.graphql(graphqlOperation(createUserMutation, { input: { username, email } }))
      setUserData(prevState => ({ ...prevState, me: me?.data?.createUser }))
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
