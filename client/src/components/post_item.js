import React from "react";
import Card, { CardHeader, CardContent } from "material-ui/Card";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";
import PostActions from "../containers/post_actions";
import "../scss/post_item.scss";

export const PostItem = ({ post, remove }) => {
  return (
    <div>
      <Card className="postItem">
        <CardHeader
          avatar={<Avatar>{post.owner.name.charAt(0)}</Avatar>}
          action={<PostActions post={post} />}
          title={post.owner.name}
          subheader={post.created_at}
        />
        <CardContent>
          <a href={"/posts/" + post.id}>
            <Typography component="p">{post.body}</Typography>
          </a>
        </CardContent>
      </Card>
    </div>
  );
};
