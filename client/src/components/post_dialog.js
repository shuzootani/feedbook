import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

class PostDialog extends Component {
  state = {
    value: this.props.body ? this.props.body : ''
  }

  handleEdit(e) {
    this.setState({value: e.target.value})
  }

  savePost() {
    this.props.update(this.props.id, this.state.value)
    this.props.close()
  }

  render() {
    return (
      <div>
        <Dialog open={this.props.open} onRequestClose={(e) => this.props.close(e)}>
          <DialogContent>
            <TextField
              autoFocus
              multiline
              rowsMax="10"
              id="text-body"
              fullWidth
              value={this.state.value}
              onChange={e => this.handleEdit(e)}
            >
            </TextField>
          </DialogContent>
          <DialogActions>
            <Button onClick={e => this.props.close()} color="primary">キャンセル</Button>
            <Button onClick={e => this.savePost()} color="primary">保存</Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default PostDialog