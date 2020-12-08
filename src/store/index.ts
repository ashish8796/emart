import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import * as apiClient from '../services/api';

export const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk.withExtraArgument(apiClient))));

export default store;