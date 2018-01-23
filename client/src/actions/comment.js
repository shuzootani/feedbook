import { get, post, destroy, patch } from "../http";
import { handleError } from "../error";

// Public
export const fetchComments = (page = 1) => {
  const id = location.pathname.match(/[0-9]+/)[0];
  return dispatch => {
    get(`/comments?post_id=${id}&page=${page}`)
      .then(comments => {
        if (page === 1) {
          dispatch(successFetchComments(comments));
        } else {
          dispatch(successLoadComments(comments));
        }
      })
      .catch(e => handleError(e));
  };
};

export const addComment = (id, body) => {
  return dispatch => {
    post(`/comments?post_id=${id}`, { comment: { body } })
      .then(comment => {
        dispatch(successAddComment(comment));
      })
      .catch(e => handleError(e));
  };
};

export const updateComment = (id, body) => {
  return dispatch => {
    patch(`/comments/${id}`, { comment: { body } })
      .then(comment => {
        dispatch(successUpdateComment(comment));
      })
      .catch(e => handleError(e));
  };
};

export const removeComment = id => {
  return dispatch => {
    destroy(`/comments/${id}`)
      .then(id => {
        dispatch(successRemoveFeed(id));
      })
      .catch(e => handleError(e));
  };
};

// Private
const successFetchComments = comments => {
  return {
    type: "FETCH_COMMENTS",
    comments
  };
};

const successLoadComments = comments => {
  return {
    type: "LOAD_MORE_COMMENTS",
    comments
  };
};

const successAddComment = comment => {
  return {
    type: "ADD_COMMENT",
    comment
  };
};

const successUpdateComment = comment => {
  return {
    type: "UPDATE_COMMENT",
    comment
  };
};

const successRemoveFeed = id => {
  return {
    type: "REMOVE_COMMENT",
    id
  };
};
