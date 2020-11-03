import { combineReducers } from "redux";
import home from "./home.reducer";
import category from "./category.reducer";

let rootReducer = combineReducers({ home, category })

export default rootReducer;