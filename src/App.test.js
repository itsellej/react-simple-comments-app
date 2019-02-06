import React from "react";
import Enzyme, { shallow } from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";
import App from "./App";

Enzyme.configure({ adapter: new EnzymeAdapter() });

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

test("renders without crashing", () => {
  shallow(<App />);
});

test("expect four instances of ApprovalCard to be rendered", () => {
  const wrapper = shallow(<App />);
  const app = findByTestAttr(wrapper, "App");
  expect(app.html()).toContain("Elle");
  expect(app.html()).toContain("Hello");
  expect(app.html()).toContain("Simon");
  expect(app.html()).toContain("Sally");
  expect(app.html()).toContain("Julian");
});
