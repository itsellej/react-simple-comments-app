import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import Comments from "../Comments";
import ApprovalCard from "../ApprovalCard";
import CommentDetail from "../CommentDetail";

Enzyme.configure({ adapter: new EnzymeAdapter() });

let wrapper;
let instance;

beforeEach(() => {
  wrapper = shallow(<Comments />);
  instance = wrapper.instance();
});

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

test("renders without crashing", () => {
  shallow(<Comments />);
});

test("renders ApprovalCard based on number of items in this.state.comments", () => {
  const comments = instance.state.comments.length;
  if (comments > 1) {
    expect(wrapper.find("ApprovalCard").length).toBe(comments);
  }
});

test("renders CommentDetail instances based number of ApprovalCard instances", () => {
  const comments = instance.state.comments.length;
  if (comments > 1) {
    expect(wrapper.find("CommentDetail").length).toBe(comments);
  }
});

test("displays counter of comments", () => {
  const comments = instance.state.comments.length;
  const numberOfComments = findByTestAttr(wrapper, "number-of-comments");
  if (comments > 1) {
    expect(numberOfComments.text()).toContain("Number of comments:");
    expect(numberOfComments.text()).toContain(comments);
  }
});

test("deletes a comment", () => {
  const numberOfComments = instance.state.comments.length;
  instance.handleDelete(1);
  expect(instance.state.comments.length).toEqual(numberOfComments - 1);
});
