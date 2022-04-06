//will allow us to combine all the reducers into a big root reducer
import { combineReducers } from "redux";
import { userReducer } from "./user";
import { categoriesReducer } from "./categories";
import { cartReducer } from "./cart";

export const rootReducer = combineReducers({
  // state : associated reducer
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
