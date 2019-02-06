import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import ApprovalCard from "../ApprovalCard";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

test("renders without crashing", () => {
  shallow(<ApprovalCard />);
});

test("displays children property", () => {
  const wrapper = shallow(<ApprovalCard>Hello</ApprovalCard>);
  const content = findByTestAttr(wrapper, "content");
  expect(content.text()).toEqual("Hello");
});
