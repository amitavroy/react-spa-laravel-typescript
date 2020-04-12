import React from "react";
import { shallow } from "enzyme";
import LoginPage from "./../../pages/login";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";

configure({ adapter: new Adapter() });

describe("<LoginPage />", () => {
  it("renders the login form", () => {
    const wrapper = shallow(<LoginPage />);
    expect(wrapper.find(".login-page")).to.have.length(1);
  });

  it("clicking on checkbox changes state", () => {
    const wrapper = shallow(<LoginPage />);
    wrapper.find("#remember").simulate("change", { target: { checked: true } });
    expect(wrapper.state("isChecked")).to.equals(true);
  });

  it("clicking on label also changes state", () => {
    const wrapper = shallow(<LoginPage />);
    wrapper.find("#remember-label").simulate("click");
    expect(wrapper.state("isChecked")).to.equals(true);
  });
});
