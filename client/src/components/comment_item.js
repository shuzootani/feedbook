import React, { Component } from "react";

import List, {
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText
} from "material-ui/List";
import Avatar from "material-ui/Avatar";
import IconButton from "material-ui/IconButton";
import Delete from "material-ui-icons/Delete";
import Edit from "material-ui-icons/ModeEdit";
import Divider from "material-ui/Divider";
import Dialog from "../containers/comment_dialog";
import { withStyles } from "material-ui/styles";

class CommentItem extends Component {
  state = {
    open: false
  };

  openDialog() {
    this.setState({ open: true });
  }

  closeDialog() {
    this.setState({ open: false });
  }

  comment_params() {
    const { id, body } = { ...this.props };
    return { id, body };
  }

  ownerActions() {
    if (this.props.me === null) return null
    if (this.props.me.id !== this.props.owner.id) return null;
    return (
      <div>
        <IconButton onClick={e => this.openDialog(e)}>
          <Edit />
        </IconButton>
        <IconButton onClick={e => this.props.remove(this.props.id)}>
          <Delete />
        </IconButton>
      </div>
    );
  }

  render() {
    return (
      <div className="mb16">
        <List dense={true}>
          <ListItem button>
            <a href={`/users/` + this.props.owner.id}>
              <ListItemAvatar>
                <Avatar>{this.props.owner.name.charAt(0)}</Avatar>
              </ListItemAvatar>
            </a>
            <div className="pl16 pr48">
              <ListItemText
                primary={this.props.owner.name}
                secondary={this.props.body}
              />
            </div>
            <ListItemSecondaryAction>
              <Dialog
                open={this.state.open}
                close={e => this.closeDialog()}
                {...this.comment_params()}
              />
              {this.ownerActions()}
            </ListItemSecondaryAction>
          </ListItem>
        </List>
        <Divider />
      </div>
    );
  }
}

export default CommentItem;
