import { connect } from "react-redux";
import * as comment from "../actions/comment";
import Comment from "../components/comment_list";

const stateToProps = state => {
  return {
    me: state.users.me,
    comments: state.comments.list
  };
};

const dispatchToProps = dispatch => {
  return {
    add: (id, body) => dispatch(comment.addComment(id, body)),
    remove: id => dispatch(comment.removeComment(id))
  };
};

export default connect(stateToProps, dispatchToProps)(Comment);