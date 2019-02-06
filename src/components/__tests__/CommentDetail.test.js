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

test("renders without crashing", () => {
  const wrapper = setup(); //renders app. Checks if it renders without crashing
  console.log(wrapper.debug()); //console log DOM
});
