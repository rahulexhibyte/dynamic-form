import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reducers from "../reducers";

const configureStore = () => {
  const store = createStore(reducers, applyMiddleware(logger));
  return store;
};

export default configureStore;
