import React from "react";
import CommentForm from "../components/comment_field";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import CommentItem from "./comment_item";
import Button from "material-ui/Button";

const CommentList = ({ comments, me, add, remove, load }) => {
  const commentCount = () => {
    if (comments.length < 1) return;
    return <Typography>{comments.length} comments</Typography>;
  };

  const comment_params = () => {
    let id = location.pathname.match(/[0-9]+/)[0];
    return { id, add };
  };

  const loadMore = () => {
    load(2)
  }

  return (
    <div className='wrap80'>
      {commentCount()}
      <CommentForm {...comment_params()} me={me} />
      {comments.map(comment => {
        return <CommentItem me={me} key={comment.id} {...comment} remove={id => remove(id)} />;
      })}
      <Button onClick={e => loadMore()}>Load More Comments</Button>
    </div>
  );
};

export default CommentList;