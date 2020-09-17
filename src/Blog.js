import React from "react";
import { Header } from "semantic-ui-react";
import Post from "./Post";
import PostForm from "./PostForm";

class Blog extends React.Component {
  state = {
    posts: [
      { id: 1, title: "React", body: "best component library" },
      { id: 2, title: "React Routes", body: "best router library" },
      { id: 3, title: "Tacos", body: "best food" },
    ],
  };

  //post is going to look like this {title: "asdf", body: "asdfasdf"}
  addPost = (post) => {
    // generate a fake id.
    const newPost = { ...post, id: Math.random() + "" };
    this.setState({
      posts: [...this.state.posts, newPost],
    });
  };

  // expecting = {id:1,title:'asd',body:'updated'}
  // editing/reading = map
  // deleting => filter
  editPost = (updatedPost) => {
    const newPosts = this.state.posts.map((post) => {
      if (post.id === updatedPost.id) {
        return updatedPost;
      }
      return post;
    });

    this.setState({
      posts: newPosts,
    });
  };

  // expecting the id of post to delete
  // remove => filter
  deletePost = (postId) => {
    console.log(postId);
    const filteredPosts = this.state.posts.filter((p) => p.id !== postId);
    this.setState({
      posts: filteredPosts,
    });
  };

  renderPosts() {
    return this.state.posts.map((p) => (
      <Post
        key={p.id}
        {...p}
        editPostHandler={this.editPost}
        deletePost={this.deletePost}
      />
    ));
  }

  render() {
    return (
      <div>
        <Header as="h2">Blog</Header>
        <PostForm addPostHandler={this.addPost} />
        {this.renderPosts()}
      </div>
    );
  }
}

export default Blog;
