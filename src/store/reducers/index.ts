import { combineReducers } from "redux";
import home from "./home.reducer";
import category from "./category.reducer";
import product from "./product.reducer";
import cart from "./shopping.reducer";
import user from "./user.reducer";
import order from "./orders.reducer";
import screen from "./screen.reducer";

let rootReducer = combineReducers({ home, category, product, cart, user, order, screen })

export default rootReducer;