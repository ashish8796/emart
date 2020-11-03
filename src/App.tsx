import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

import HeaderElement from "./containers/Header";
import CategoryProducts from "./containers/CategoryProducts";
import ProductUI from "./containers/Product";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <HeaderElement />
        <Switch>
          <Route path="/product/:slug/:product_id" component={ProductUI} />
          <Route
            path="/category/:category_name/:category_id"
            target="_blank"
            component={CategoryProducts}
          />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
