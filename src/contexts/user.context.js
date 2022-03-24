import { createContext, useState } from "react";

//create the initial context values, the base empty state
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  // The provider will allow any child component to access the state being provided as value
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
