import { combineReducers } from "redux";
import home from "./home.reducer";
import category from "./category.reducer";
import product from "./product.reducer";
import cart from "./shopping.reducer";

let rootReducer = combineReducers({ home, category, product, cart })

export default rootReducer;