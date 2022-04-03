import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../services";

//create the initial context values, the base empty state
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
        // the listener will return the user when authenticated and 
        // null when the user has logger out, hence we can centrailize this logic here
        setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  // The provider will allow any child component to access the state being provided as value
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
