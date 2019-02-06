import React, { Component } from "react";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [
        { id: 1, author: "Elle", text: "Hello" },
        { id: 2, author: "Simon" },
        { id: 3, author: "Sally" },
        { id: 4, author: "Julian" }
      ]
    };
  }

  numberOfComments = () => {
    return this.state.comments.length;
  };

  render() {
    const { comments } = this.state;

    const showComments = comments.map(comment => {
      return (
        <ApprovalCard key={comment.id}>
          <CommentDetail {...comment} />
        </ApprovalCard>
      );
    });
    return (
      <div className="App" data-test="App">
        <p data-test="number-of-comments">
          Number of comments: {this.numberOfComments()}
        </p>
        {showComments}
      </div>
    );
  }
}
