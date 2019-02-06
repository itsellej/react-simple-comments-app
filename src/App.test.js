import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";
import ApprovalCard from "./components/ApprovalCard";
import CommentDetail from "./components/CommentDetail";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

test("renders without crashing", () => {
  shallow(<App />);
});

test("renders ApprovalCard based on number of items in this.state.comments", () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  const comments = instance.state.comments.length;
  if (comments > 1) {
    expect(wrapper.find("ApprovalCard").length).toBe(comments);
  }
});

test("renders CommentDetail instances based number of ApprovalCard instances", () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  const comments = instance.state.comments.length;
  if (comments > 1) {
    expect(wrapper.find("CommentDetail").length).toBe(comments);
  }
});

test("displays number of comments", () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  const comments = instance.state.comments.length;
  const numberOfComments = findByTestAttr(wrapper, "number-of-comments");
  if (comments > 1) {
    expect(numberOfComments.text()).toContain("Number of comments:");
    expect(numberOfComments.text()).toContain(comments);
  }
});
