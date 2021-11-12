import React from "react";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import HeaderElement from "../containers/Header";
import store from "../store";
import "./styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <HeaderElement />
      <Component {...pageProps} />
    </Provider>
  );
}
