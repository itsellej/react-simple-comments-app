import React from "react";
import faker from "faker";

const CommentDetail = props => {
  function displayAvatar() {
    return props.avatar || faker.image.avatar();
  }

  function displayAuthor() {
    return props.author || faker.name.firstName();
  }

  function displayDate() {
    return props.date || faker.date.past().toString();
  }

  function displayCommentText() {
    return props.text || faker.lorem.sentence();
  }

  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" data-test="avatar-image" src={displayAvatar()} />
        </a>
        <div className="content">
          <a href="/" className="author" data-test="author">
            {displayAuthor()}
          </a>
          <div className="metadata">
            <span className="date" data-test="date">
              {displayDate()}
            </span>
          </div>
          <div className="text" data-test="text">
            {displayCommentText()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
