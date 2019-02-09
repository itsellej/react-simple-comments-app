import React from "react";
import Comments from "./components/Comments";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Comments />;
  }
}
