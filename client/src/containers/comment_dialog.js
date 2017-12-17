import { connect } from "react-redux";
import * as comment from "../actions/comment";
import CommentDialogComponent from "../components/comment_dialog";

const dispatchToProps = dispatch => {
  return {
    update: (id, body) => dispatch(comment.updateComment(id, body))
  };
};

export default connect(null, dispatchToProps)(CommentDialogComponent);