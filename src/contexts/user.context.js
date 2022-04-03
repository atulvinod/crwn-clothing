import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../services";

//create the initial context values, the base empty state
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

export const INITIAL_STATE = {
  currentUser: null,
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`unhandled type ${type} in userReducer`);
  }
};

export const UserProvider = ({ children }) => {
 /**
  * In the reducer, when the dispatch function generates a new state, then the
  * component is re-rendered
  */
  const { state, dispatch } = userReducer(userReducer, INITIAL_STATE);
  const { currentUser } = state;
  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener(({ user }) => {
      // the listener will return the user when authenticated and
      // null when the user has logger out, hence we can centrailize this logic here
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  // The provider will allow any child component to access the state being provided as value
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
