import { connect } from "react-redux";
import * as post from "../actions/post";
import TimelineComponent from "../components/timeline";

const stateToProps = state => {
  return {
    posts: state.posts.feed
  };
};

const dispatchToProps = dispatch => {
  return {
    load: page => dispatch(post.fetchFeed(page)),
    add: body => dispatch(post.addPost(body)),
    remove: id => dispatch(post.removePost(id))
  };
};

export default connect(stateToProps, dispatchToProps)(TimelineComponent);
