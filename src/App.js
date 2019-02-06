import React, { Component } from "react";
import CommentDetail from "./components/CommentDetail";
import faker from "faker";

class App extends Component {
  render() {
    return (
      <div className="App ui container comments">
        <CommentDetail />
      </div>
    );
  }
}

export default App;
