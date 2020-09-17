import React from "react";
import { Button, Header, Icon, Segment } from "semantic-ui-react";
import PostForm from "./PostForm";

// state or lifecycle methods - use a class(or function component with hooks)

// const Post = ({ id, title, body }) => {
//   return (
//     <Segment>
//       <Header as="h3">{title}</Header>
//       <p>{body}</p>
//     </Segment>
//   );
// };

class Post extends React.Component {
  state = { editing: false };
  toggleEdit = () => {
    this.setState({
      editing: !this.state.editing,
    });
  };
  render() {
    const { id, title, body, editPostHandler, deletePost } = this.props;
    const { editing } = this.state;
    return (
      <Segment>
        {editing ? (
          //  <PostForm {...this.props}/>
          <PostForm
            id={id}
            title={title}
            body={body}
            editPostHandler={editPostHandler}
            toggleEditProp={this.toggleEdit}
          />
        ) : (
          <div>
            <Header as="h3">{title}</Header>
            <p>{body}</p>
          </div>
        )}
        <div>
          <Button onClick={this.toggleEdit}>
            <Icon color="blue" name="pencil" />
          </Button>
          <Button onClick={() => deletePost(id)}>
            <Icon color="red" name="trash" />
          </Button>
        </div>
      </Segment>
    );
  }
}

export default Post;
