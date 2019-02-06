import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";
import ApprovalCard from "./components/ApprovalCard";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

test("renders without crashing", () => {
  shallow(<App />);
});

test("displays number of comments", () => {
  const wrapper = shallow(<App />);
  const numberOfComments = findByTestAttr(wrapper, "number-of-comments");
  expect(numberOfComments.text()).toContain("Number of comments:");
  expect(numberOfComments.text()).toContain("4");
});
