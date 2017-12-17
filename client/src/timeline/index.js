import React, { Component } from "react";
import ReactDOM from "react-dom";
import Timeline from "../containers/timeline";
import * as post from "../actions/post";
import { fetchMe } from "../actions/user";

// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "../reducers";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
store.dispatch(fetchMe());
store.dispatch(post.fetchFeed(1));

ReactDOM.render(
  <Provider store={store}>
    <Timeline />
  </Provider>,
  document.querySelector("#timeline")
);
