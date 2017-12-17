import React, { Component } from 'react'
import IconButton from "material-ui/IconButton";
import Edit from "material-ui-icons/ModeEdit";
import Delete from "material-ui-icons/Delete";
import Menu, { MenuItem } from 'material-ui/Menu';
import Dialog from "../containers/post_dialog";

class ActionsMenu extends Component {

  state = {
    open: false,
  };

  openDialog() {
    this.setState({ open: true });
  };

  closeDialog() {
    this.setState({ open: false });
  };

  removePost() {
    this.props.remove(this.props.post.id)
  }
  
  ownerActions() {
    if (this.props.me.id !== this.props.post.owner.id) return null
    return (
      <div>
        <IconButton onClick={e => this.openDialog(e)}><Edit /></IconButton>
        <IconButton onClick={e => this.removePost(e)}><Delete /></IconButton>
        <Dialog open={this.state.open} close={e => this.closeDialog()} {...this.props.post}/>
      </div>
    )
  }

  render () {
    return this.ownerActions()
  }
}

export default ActionsMenu