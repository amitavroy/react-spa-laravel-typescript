import React from "react";
import { shallow } from "enzyme";
import TextPost from "../../components/common/activity/textpost";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";

configure({ adapter: new Adapter() });

const activity = {
  comments: 0,
  like: 0,
  caption: "Some post I need to check",
  user: {
    name: "Jhon Doe",
    email: "jd@gmail.com",
    designation: "Web developer",
  },
  type: "text",
};

describe("<TabPills />", () => {
  it("renders a text post", () => {
    const wrapper = shallow(<TextPost activity={activity} />);
    expect(wrapper.find(".text-post-component")).to.have.length(1);
  });

  it("renders a text in the post", () => {
    const wrapper = shallow(<TextPost activity={activity} />);
    expect(wrapper.find(".activity-caption").text()).to.equals(
      "Some post I need to check"
    );
  });
});
