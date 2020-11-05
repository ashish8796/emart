import { combineReducers } from "redux";
import home from "./home.reducer";
import category from "./category.reducer";
import product from "./product.reducer";

let rootReducer = combineReducers({ home, category, product })

export default rootReducer;