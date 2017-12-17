import List, {
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText
} from "material-ui/List";
import Avatar from "material-ui/Avatar";
import IconButton from "material-ui/IconButton";
import Delete from "material-ui-icons/Delete";
import Edit from "material-ui-icons/ModeEdit";
import Divider from "material-ui/Divider";
import React, { Component } from "react";
import Dialog from "../containers/comment_dialog";

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
    let { id, body } = {...this.props}
    return {id, body}
  }

  ownerActions() {
    if (this.props.me.id !== this.props.owner.id) return null
    return (
      <div>
        <IconButton onClick={e => this.openDialog(e)}>
          <Edit />
        </IconButton>
        <IconButton onClick={e => this.props.remove(this.props.id)}>
          <Delete />
        </IconButton>
      </div>
    )
  }

  render() {
    return (
      <div>
        <List dense={true}>
          <ListItem button>
            <ListItemAvatar>
              <Avatar>{this.props.owner.name.charAt(0)}</Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={this.props.owner.name}
              secondary={this.props.body}
            />
            <ListItemSecondaryAction>
              <Dialog open={this.state.open} close={e => this.closeDialog()} {...this.comment_params()}/>
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
