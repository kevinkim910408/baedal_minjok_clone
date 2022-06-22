import { combineReducers } from "redux";
import reducer from './reducer_one';
import userReducer from "./user";
import postReducer from "./posting";
import detailReducer from "./detail";
import commentReducer from './comment'


const rootReducer = combineReducers({
    reducer,
    userReducer,
    postReducer,
    detailReducer,
    commentReducer,
})


export default rootReducer;