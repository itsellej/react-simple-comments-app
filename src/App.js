import React, { Component } from "react";
import CommentDetail from "./components/CommentDetail";
import ApprovalCard from "./components/ApprovalCard";

class App extends Component {
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

export default App;
