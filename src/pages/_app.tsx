import React from "react";
import { Provider } from "react-redux";
import HeaderElement from "../containers/Header";
import store from "../store";
import "./styles.css";

export default function App() {
  return (
    <Provider store={store}>
      <HeaderElement />
    </Provider>
  );
}
