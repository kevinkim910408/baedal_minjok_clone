import { combineReducers } from "redux";
import reducer from './reducer_one';
import userReducer from "./user";
import postReducer from "./posting";
import detailReducer from "./detail";


const rootReducer = combineReducers({
    reducer,
    userReducer,
    postReducer,
    detailReducer,
})


export default rootReducer;