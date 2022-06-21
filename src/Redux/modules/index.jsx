import { combineReducers } from "redux";
import reducer from './reducer_one';
import userReducer from "./user";
import postReducer from "./posting";


const rootReducer = combineReducers({
    reducer,
    userReducer,
    postReducer,
})


export default rootReducer;