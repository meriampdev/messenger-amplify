import { useState, createContext } from "react"

export const UserActionsContext = createContext(null);

export const UserActionsProvider = ({ children }) => {
  const [state, setState] = useState({ })

  const handleSetState = (data) => {
    setState(prevState => ({ ...prevState, ...data }))
  }

  return (
    <>
      <UserActionsContext.Provider value={{ state, handleSetState }}>
        {children}
      </UserActionsContext.Provider>
    </>
  );
}