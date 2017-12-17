import React, { Component } from "react";
import { PostForm } from "../module/post_form";
import { PostItem } from "../module/post_item";
import "../scss/module.scss";
import { CircularProgress } from 'material-ui/Progress';

class Timeline extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      loading: false
    };
    this.loadMore = this.loadMore.bind(this);
  }

  componentDidMount() {
    document.addEventListener("scroll", this.loadMore);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.loadMore);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.props.posts.length !== nextProps.posts.length;
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.posts.length !== nextProps.posts.length) {
      this.setState({ loading: false });
      this.setState({ page: this.state.page + 1 });
    }
  }

  loadMore() {
    let scrollableHeight = document.body.clientHeight - (window.innerHeight + document.documentElement.scrollTop);

    if (scrollableHeight < 10 && !this.state.loading) {
      this.setState({loading: true})
      this.props.load(this.state.page + 1)
    }
  }

  render() {
    return (
      <div className="wrap60">
        <PostForm add={body => this.props.add(body)} />
        {this.props.posts.map(post => {
          return (
            <PostItem
              key={post.id}
              post={post}
              remove={id => this.props.remove(id)}
            />
          );
        })}
        {/* {this.state.loading ? <CircularProgress/> : null} */}
      </div>
    );
  }
}

export default Timeline;
