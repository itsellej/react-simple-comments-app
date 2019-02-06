import React from "react";
import faker from "faker";

export default class CommentDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  displayAvatar = () => {
    return this.props.avatar || faker.image.avatar();
  };

  displayAuthor = () => {
    return this.props.author || faker.name.firstName();
  };

  displayDate = () => {
    return this.props.date || faker.date.past().toString();
  };

  displayCommentText = () => {
    return this.props.text || faker.lorem.sentence();
  };

  render() {
    return (
      <div className="ui container comments">
        <div className="comment">
          <a href="/" className="avatar">
            <img
              alt="avatar"
              data-test="avatar-image"
              src={this.displayAvatar()}
            />
          </a>
          <div className="content">
            <a href="/" className="author" data-test="author">
              {this.displayAuthor()}
            </a>
            <div className="metadata">
              <span className="date" data-test="date">
                {this.displayDate()}
              </span>
            </div>
            <div className="text">comment here</div>
          </div>
        </div>
      </div>
    );
  }
}
