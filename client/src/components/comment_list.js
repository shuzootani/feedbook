import React from "react";
import CommentForm from "../components/comment_field";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import CommentItem from "./comment_item";

const CommentList = ({ comments, me, add, remove }) => {
  const commentCount = () => {
    if (comments.length < 1) return;
    return <Typography>{comments.length} comments</Typography>;
  };

  const comment_params = () => {
    let id = location.pathname.match(/[0-9]+/)[0];
    return { id, add };
  };

  return (
    <div>
      {commentCount()}
      <CommentForm {...comment_params()} />
      {comments.map(comment => {
        return <CommentItem me={me} key={comment.id} {...comment} remove={id => remove(id)} />;
      })}
    </div>
  );
};

export default CommentList;