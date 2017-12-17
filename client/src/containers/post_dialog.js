import { connect } from "react-redux";
import * as post from "../actions/post";
import PostDialogComponent from "../components/post_dialog";

const dispatchToProps = dispatch => {
  return {
    update: (id, body) => dispatch(post.updatePost(id, body))
  };
};

export default connect(null, dispatchToProps)(PostDialogComponent);