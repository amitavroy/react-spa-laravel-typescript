import React from "react";
import { shallow } from "enzyme";
import ValidationError from "./../../components/common/validationerror";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";

configure({ adapter: new Adapter() });

describe("<ValidationError />", () => {
  it("renders the validation error component", () => {
    const wrapper = shallow(<ValidationError message="Some error" />);
    expect(wrapper.find(".validation-error")).to.have.length(1);
  });

  it("does not renders the validation error component when message is empty", () => {
    const wrapper = shallow(<ValidationError />);
    expect(wrapper.find(".validation-error")).to.have.length(0);
  });
});
