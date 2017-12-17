import { get, post, destroy, patch } from "../http";
import { handleError } from "../error";

// Public
export const fetchFeed = (page) => {
  return dispatch => {
    get(`/posts/feed?page=${page}`)
      .then(posts => {
        dispatch(successFetchFeed(posts));
      })
      .catch(e => handleError(e));
  };
};

export const addPost = (body) => {
  return dispatch => {
    post("/posts", {post: {body}})
      .then(post => {
        dispatch(successAddPost(post));
      })
      .catch(e => handleError(e));
  };
};

export const updatePost = (id, body) => {
  return dispatch => {
    patch(`/posts/${id}`, {post: {body}})
      .then(post => {
        dispatch(successUpdatePost(post));
      })
      .catch(e => handleError(e));
  };
};

export const removePost = (id) => {
  return dispatch => {
    destroy(`/posts/${id}`)
      .then(id => {
        dispatch(successRemoveFeed(id));
      })
      .catch(e => handleError(e));
  };
};

// Private
const successFetchFeed = (posts) => {
  return {
    type: "FETCH_FEED",
    posts
  }
}

const successAddPost = (post) => {
  return {
    type: "ADD_POST",
    post
  }
}

const successUpdatePost = (post) => {
  return {
    type: "UPDATE_POST",
    post
  }
}

const successRemoveFeed = (id) => {
  return {
    type: "REMOVE_POST",
    id
  }
}