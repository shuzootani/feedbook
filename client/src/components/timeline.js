import React, { Component } from "react";
import { PostForm } from "./post_form";
import { PostItem } from "./post_item";
import Button from "material-ui/Button";
import "../scss/module.scss";

class Timeline extends Component {
  state = {
    page: 2,
  };

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.posts.length !== nextProps.posts.length;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.posts.length !== nextProps.posts.length) {
      this.setState({ page: this.state.page + 1 });
    }
  }

  render() {
    return (
      <div className="wrap60">
        <PostForm add={body => this.props.add(body)} me={this.props.me} />
        {this.props.posts.map(post => {
          return (
            <PostItem
              key={post.id}
              post={post}
              remove={id => this.props.remove(id)}
            />
          );
        })}
        <Button onClick={e => this.props.load(this.state.page)}>LOAD MORE</Button>
      </div>
    );
  }
}

export default Timeline;
