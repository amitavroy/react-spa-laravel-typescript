import React from "react";
import { shallow } from "enzyme";
import TabPills from "./../../components/common/tab/tabpill";
import ActivityTab from "./../../components/profile/activitytab";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";

configure({ adapter: new Adapter() });

let tabs = {
  activity: {
    active: true,
    name: "Activity",
    component: ActivityTab,
    props: {},
  },
  timeline: {
    active: false,
    name: "Timeline",
    component: ActivityTab,
    props: {},
  },
  settings: {
    active: false,
    name: "Settings",
    component: ActivityTab,
    props: {},
  },
};

let counter = 0;

const handleEnableTab = (tabName) => {
  counter++;
};

describe("<TabPills />", () => {
  it("renders a tab pill", () => {
    const wrapper = shallow(
      <TabPills tabs={tabs} handleEnableTab={handleEnableTab} />
    );
    expect(wrapper.find(".nav-pills")).to.have.length(1); // check nav pill ul is visible
    expect(wrapper.find(".nav-item")).to.have.length(3); // check all three pills are rendered based on json
    expect(wrapper.find("#tab-pill-0 .active")).to.have.length(1); // check that the first pill is active
  });

  it("second tab is active", () => {
    tabs = {
      activity: {
        active: false,
        name: "Activity",
        component: ActivityTab,
        props: {},
      },
      timeline: {
        active: true,
        name: "Timeline",
        component: ActivityTab,
        props: {},
      },
      settings: {
        active: false,
        name: "Settings",
        component: ActivityTab,
        props: {},
      },
    };
    const wrapper = shallow(
      <TabPills tabs={tabs} handleEnableTab={handleEnableTab} />
    );
    expect(wrapper.find("#tab-pill-1 .active")).to.have.length(1); // check that the second pill is active
  });

  it("on tab click prop function is called", () => {
    const wrapper = shallow(
      <TabPills tabs={tabs} handleEnableTab={handleEnableTab} />
    );
    wrapper.find("#tab-pill-0 a").simulate("click", { preventDefault() {} });
    expect(counter).to.be.equals(1); // check the function was called
  });

  it("on tab click active class is added", () => {
    const wrapper = shallow(
      <TabPills tabs={tabs} handleEnableTab={handleEnableTab} />
    );
    wrapper.find("#tab-pill-2 a").simulate("click", { preventDefault() {} });
    expect(wrapper.find("#tab-pill-0 a").hasClass("inactive"));
    expect(wrapper.find("#tab-pill-2 a").hasClass("active"));
  });

  it("on tab click active class is added", () => {
    const wrapper = shallow(
      <TabPills tabs={tabs} handleEnableTab={handleEnableTab} />
    );
    wrapper.find("#tab-pill-2 a").simulate("click", { preventDefault() {} });
    expect(wrapper.find("#tab-pill-0 a").hasClass("inactive"));
    expect(wrapper.find("#tab-pill-2 a").hasClass("active"));
  });

  it("shows the name of the tab", () => {
    const wrapper = shallow(
      <TabPills tabs={tabs} handleEnableTab={handleEnableTab} />
    );
    wrapper.find("#tab-pill-2 a").simulate("click", { preventDefault() {} });
    expect(wrapper.find("#tab-pill-2 a").text()).to.equals("Settings");

    wrapper.find("#tab-pill-0 a").simulate("click", { preventDefault() {} });
    expect(wrapper.find("#tab-pill-0 a").text()).to.equals("Activity");
  });
});
