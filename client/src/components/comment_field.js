import React from "react";
import { CardActions } from "material-ui/Card";
import Button from "material-ui/Button";
import TextField from "material-ui/TextField";
import "../scss/module.scss";

const CommentField = ({ id, add }) => {
  const handleClick = e => {
    let body = document.getElementById(`${id}-post-comment`).value;
    if (body.trim() === "") return;
    add(id, body);
    document.getElementById(`${id}-post-comment`).value = "";
  };

  return (
    <div className="wrap80 center liner mb24">
      <TextField
        multiline
        rowsMax="5"
        id={id + "-post-comment"}
        fullWidth
        placeholder="add comment..."
      />
      <Button onClick={e => handleClick(e)} dense color="primary">投稿</Button>
    </div>
  );
};

export default CommentField;
