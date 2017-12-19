const FETCH = "FETCH_COMMENTS";
const LOAD = "LOAD_MORE_COMMENTS";
const ADD = "ADD_COMMENT";
const UPDATE = "UPDATE_COMMENT";
const REMOVE = "REMOVE_COMMENT";

const initialState = {
  list: []
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return Object.assign({}, state, { list: action.comments });
    case LOAD:
      return Object.assign({}, state, { list: [...state.list, ...action.comments] }); 
    case ADD:
      return Object.assign({}, state, { list: [action.comment, ...state.list] });
    case UPDATE:
      return Object.assign({}, state, {
        list: state.list.map(c => (c.id === action.comment.id ? action.comment : c))
      });
    case REMOVE:
      return Object.assign({}, state, {
        list: state.list.filter(c => c.id !== action.id)
      });
    default:
      return state;
  }
};

export default commentReducer;
