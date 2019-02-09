import React from "react";
import faker from "faker";

function displayAvatar(props) {
  return props.avatar || faker.image.avatar();
}

function displayAuthor(props) {
  return props.author || faker.name.firstName();
}

function displayDate(props) {
  return props.date || faker.date.past().toString();
}

function displayCommentText(props) {
  return props.text || faker.lorem.sentence();
}

const CommentDetail = props => {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a href="/" className="avatar">
          <img
            alt="avatar"
            data-test="avatar-image"
            src={displayAvatar(props)}
          />
        </a>
        <div className="content">
          <a href="/" className="author" data-test="author">
            {displayAuthor(props)}
          </a>
          <div className="metadata">
            <span className="date" data-test="date">
              {displayDate(props)}
            </span>
          </div>
          <div className="text" data-test="text">
            {displayCommentText(props)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentDetail;
