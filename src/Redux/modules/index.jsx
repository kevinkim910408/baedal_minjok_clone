import { combineReducers } from "redux";
import userReducer from "./user";
import postReducer from "./posting";
import detailReducer from "./detail";
import commentReducer from './comment'


const rootReducer = combineReducers({
    userReducer,
    postReducer,
    detailReducer,
    commentReducer,
})


export default rootReducer;