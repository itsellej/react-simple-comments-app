import React from "react";
import faker from "faker";

export default class CommentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="comment">
        <a href="/" className="avatar">
          <img
            alt="avatar"
            data-test="avatar-image"
            src={this.props.avatar || faker.image.avatar()}
          />
        </a>
      </div>
    );
  }
}
