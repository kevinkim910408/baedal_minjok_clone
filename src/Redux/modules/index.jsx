import { combineReducers } from "redux";
import reducer from './reducer_one';
import userReducer from "./user";


const rootReducer = combineReducers({
    reducer,
    userReducer,
})


export default rootReducer;