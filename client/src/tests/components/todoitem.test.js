import React from "react";
import { shallow } from "enzyme";
import TodoItem from "./../../components/todo/todoitem";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { expect } from "chai";

configure({ adapter: new Adapter() });

let markComplete = 0;
const handleMarkComplete = () => {
  markComplete++;
};

let todo = {
  is_completed: false,
};

describe("<TodoItem />", () => {
  it("renders the todo item", () => {
    const wrapper = shallow(<TodoItem todo={todo} />);
    expect(wrapper.find(".todo-item")).to.have.length(1);
  });

  it("calls prop function when item is marked compelete", () => {
    const wrapper = shallow(
      <TodoItem todo={todo} markTodoCompelete={handleMarkComplete} />
    );
    wrapper.find(".handleTodoCheck").simulate("click", { preventDefault() {} });
    expect(markComplete).to.be.equals(1); // check the function was called
  });

  it("has class done when the todo is complete", () => {
    todo.is_completed = true;
    const wrapper = shallow(<TodoItem todo={todo} />);
    expect(wrapper.find(".todo-item").hasClass("done"));
  });

  it("checkbox is checked when todo is complete", () => {
    todo.is_completed = true;
    const wrapper = shallow(<TodoItem todo={todo} />);
    let checkbox = wrapper.find({ type: "checkbox" });
    expect(checkbox.props().checked).to.equal(true);
  });
});
