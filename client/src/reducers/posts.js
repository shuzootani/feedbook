const FETCH_FEED = "FETCH_FEED";
const ADD = "ADD_POST";
const UPDATE = "UPDATE_POST";
const REMOVE = "REMOVE_POST";

const initialState = {
  feed: []
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FEED:
      return Object.assign({}, state, { feed: [...state.feed, ...action.posts] });
    case ADD:
      return Object.assign({}, state, { feed: [action.post, ...state.feed] });
    case UPDATE:
      return Object.assign({}, state, {
        feed: state.feed.map(p => (p.id === action.post.id ? action.post : p))
      });
    case REMOVE:
      return Object.assign({}, state, {
        feed: state.feed.filter(p => p.id !== action.id)
      });
    default:
      return state;
  }
};

export default postReducer;
