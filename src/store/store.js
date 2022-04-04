import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

//middlewares are executed before the action hits the reducer
const middleWares = [logger];

//We have to apply/compose middlewares, compose is a function which allows us to combine functions
const composedMiddlewares = compose(applyMiddleware(...middleWares));

//root-reducer is used to create the data store
export const store = createStore(rootReducer, undefined, composedMiddlewares);
