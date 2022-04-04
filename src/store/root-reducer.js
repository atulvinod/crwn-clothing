//will allow us to combine all the reducers into a big root reducer
import  {combineReducers} from 'redux';
import { userReducer } from './user/user-reducer';

export const rootReducer = combineReducers({
    // state : associated reducer
    user: userReducer
})