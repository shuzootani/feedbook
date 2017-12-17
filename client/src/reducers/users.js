const FETCH_ME = "FETCH_ME";

const initialState = {
  me: null
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ME:
      return Object.assign({}, state, { me: action.me });
    default:
      return state;
  }
};

export default userReducer;