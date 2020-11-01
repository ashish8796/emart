import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./containers/Home";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <div>
            <Route path="/">
              <Home />
            </Route>
          </div>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
