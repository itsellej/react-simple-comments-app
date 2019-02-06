import React, { Component } from "react";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <ApprovalCard>
          <CommentDetail />
        </ApprovalCard>
      </div>
    );
  }
}
