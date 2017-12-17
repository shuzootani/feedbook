import { connect } from "react-redux";
import * as post from "../actions/post";
import PostActionsComponent from "../components/post_actions";

const stateToProps = state => {
  return {
    me: state.users.me
  }
}

const dispatchToProps = dispatch => {
  return {
    remove: id => dispatch(post.removePost(id))
  };
};

export default connect(stateToProps, dispatchToProps)(PostActionsComponent);