import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import CommentDetail from "../CommentDetail";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props = {}, state = null) => {
  const wrapper = shallow(<CommentDetail {...props} />);
  if (state) {
    wrapper.setState(state);
    return wrapper;
  }
  return wrapper;
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

test("renders without crashing", () => {
  shallow(<CommentDetail />);
});

test("renders an avatar", () => {
  const wrapper = setup();
  const avatar = findByTestAttr(wrapper, "avatar-image");
  expect(avatar.prop("src")).toContain("jpg");
});

test("renders an author name", () => {
  const wrapper = setup();
  const author = findByTestAttr(wrapper, "author");
  expect(typeof author.text()).toBe("string");
});

test("renders a date", () => {
  const wrapper = setup();
  const date = findByTestAttr(wrapper, "date");
  expect(date.text()).toContain("GMT");
  expect(date.text()).toContain(":");
  expect(date.text()).toContain("20");
});

test("renders comment text", () => {
  const wrapper = setup();
  const text = findByTestAttr(wrapper, "text");
  console.log(text.debug());
  expect(text.text().length).toBeGreaterThan(5);
  expect(typeof text.text()).toEqual("string");
});
