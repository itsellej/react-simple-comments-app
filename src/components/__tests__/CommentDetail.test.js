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
  console.log(avatar.debug());
  expect(avatar.prop("src")).toContain("jpg");
});
