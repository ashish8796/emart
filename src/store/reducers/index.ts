import { combineReducers } from "redux";
import home from "./home.reducer";
import category from "./category.reducer";
import product from "./product.reducer";
import cart from "./shopping.reducer";
import user from "./user.reducer";


let rootReducer = combineReducers({ home, category, product, cart, user })

export default rootReducer;