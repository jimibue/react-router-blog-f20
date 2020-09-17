import React from "react";
import { Form } from "semantic-ui-react";

class PostForm extends React.Component {
  state = { title: "", body: "" };
  componentDidMount() {
    if (this.props.id) {
      this.setState({
        title: this.props.title,
        body: this.props.body,
      });
    }
  }
  handleSubmitX = (e) => {
    // e.preventDefault();
    console.log(this.state);
    // add the post(this.state) to state in blog
    console.log(this);
    if (this.props.id) {
      // how do I pass the id here?

      this.props.editBlogHandler({ ...this.state, id: this.props.id });
      return;
    }
    this.props.addBlogHandler(this.state);

    // clear form
  };
  handleChangeX = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <Form onSubmit={this.handleSubmitX}>
        <Form.Group width="equals">
          <Form.Input
            placeholder="Title Placeholder"
            label="Title label"
            name="title"
            onChange={this.handleChangeX}
            value={this.state.title}
          />
          <Form.Input
            placeholder="Enter Body"
            label="Body"
            name="body"
            onChange={this.handleChangeX}
            value={this.state.body}
          />
          <Form.Button color="blue">Submit</Form.Button>
        </Form.Group>
      </Form>
    );
  }
}

export default PostForm;
