import { USER_ACTION_TYPES } from "./user.types";

export const INITIAL_STATE = {
  currentUser: null,
};

export const userReducer = (state = INITIAL_STATE, payload = {}) => {
  const { type, action } = payload;
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action,
      };
    // Since all the reducers are executed when an event is dispatched
    // we have to return the current state to indicate that this reducer hasn't performed any action which changed the state
    default:
      return state;
  }
};
