import React from "react";
import { Header, Segment } from "semantic-ui-react";

// state or lifecycle methods - use a class(or function component with hooks)

const Post = ({ id, title, body }) => {
  return (
    <Segment>
      <Header as="h3">{title}</Header>
      <p>{body}</p>
    </Segment>
  );
};

export default Post;
