import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import CommentDetail from "../CommentDetail";

Enzyme.configure({ adapter: new EnzymeAdapter() });

let wrapper;

beforeEach(() => {
  wrapper = shallow(<CommentDetail />);
});

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

test("renders without crashing", () => {
  shallow(<CommentDetail />);
});

test("renders with props without crashing", () => {
  shallow(
    <CommentDetail
      image="./test_img/test_avatar.jpg"
      author="Elle"
      date="6th February 2019"
      sentence="This is my comment"
    />
  );
});

test("renders an avatar", () => {
  const avatar = findByTestAttr(wrapper, "avatar-image");
  expect(avatar.prop("src")).toContain("jpg");
});

test("renders an author name", () => {
  const author = findByTestAttr(wrapper, "author");
  expect(typeof author.text()).toBe("string");
});

test("renders a date", () => {
  const date = findByTestAttr(wrapper, "date");
  expect(date.text()).toContain("GMT");
  expect(date.text()).toContain(":");
  expect(date.text()).toContain("20");
});

test("renders comment text", () => {
  const text = findByTestAttr(wrapper, "text");
  expect(text.text().length).toBeGreaterThan(5);
  expect(typeof text.text()).toEqual("string");
});
