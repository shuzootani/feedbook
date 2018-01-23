import React, { Component } from "react";
import ReactDOM from "react-dom";
import Comment from "../containers/comment";
import * as comment from '../actions/comment';

// Redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from 'redux-logger';
import rootReducer from "../reducers";

const store = createStore(rootReducer, applyMiddleware(thunk, logger));
store.dispatch(comment.fetchComments())

ReactDOM.render(
  <Provider store={store}>
    <Comment />
  </Provider>,
  document.querySelector("#comment")
);
