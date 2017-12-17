import { get_with_auth } from "../http";
import { handleError } from "../error";

// Public
export const fetchMe = () => {
  return dispatch => {
    get_with_auth("/users/me")
      .then(me => {
        dispatch(successFetchMe(me));
      })
      .catch(e => handleError(e));
  };
};

// Private
const successFetchMe = me => {
  return {
    type: "FETCH_ME",
    me
  };
};
