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
  addBlog = (post) => {
    // generate a fake id.
    const newPost = { ...post, id: Math.random() + "" };
    this.setState({
      posts: [...this.state.posts, newPost],
    });
  };

  // expecting = {id:1,title:'asd',body:'updated'}
  // editing/reading = map
  // deleting => filter
  editBlog = (updatedPost) => {
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

  renderPosts() {
    return this.state.posts.map((p) => (
      <Post key={p.id} {...p} editBlogHandler={this.editBlog} />
    ));
  }

  render() {
    return (
      <div>
        <Header as="h2">Blog</Header>
        <PostForm addBlogHandler={this.addBlog} />
        {this.renderPosts()}
      </div>
    );
  }
}

export default Blog;
