import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

import HeaderElement from "./containers/Header";
import CategoryProducts from "./containers/CategoryProducts";
import ProductUI from "./containers/Product";
import ShoppingCart from "./containers/ShoppingCart";
import LoginAndSignUp from "./containers/Login";
import CreateOrder from "./containers/Order/CreateOrder";
import AllOrders from "./containers/Order/Orders";
import UserProfile from "./containers/User/Profile";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <HeaderElement />
        <Switch>
          <Route path="/product/:slug/:product_id" component={ProductUI} />

          <Route path="/create-order" component={CreateOrder} />

          <Route path="/account" component={UserProfile} />

          <Route path="/orders" component={AllOrders} />

          <Route
            path="/category/:category_name/:category_id"
            component={CategoryProducts}
          />

          <Route path="/cart">
            <ShoppingCart />
          </Route>

          <Route path="/login">
            <LoginAndSignUp />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
