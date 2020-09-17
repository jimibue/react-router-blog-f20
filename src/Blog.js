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
      { id: 0.23475892374598, title: "Tacos", body: "best food" },
      { id: "0.23475892374ee598", title: "Tacos", body: "best food" },
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

  renderPosts() {
    return this.state.posts.map((p) => <Post key={p.id} {...p} />);
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
