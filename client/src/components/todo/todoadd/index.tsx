import React, { Component } from "react";

interface Props {
  onTodoAdd: (data) => void;
}

class TodoAdd extends Component<Props> {
  state = { description: "", date: "" };
  componentDidMount() {
    const cDate = new Date();
    const year = cDate.getFullYear();
    const month = cDate.getMonth() + 1;
    const monthString = (month <= 9 ? `0${month}` : month).toString();
    const dt = cDate.getDate();
    const dtString = (dt <= 9 ? `0${dt}` : dt).toString();
    const dateString = `${year}-${monthString}-${dtString}`;
    this.setState({ date: dateString });
  }
  handleFormSubmit(event) {
    event.preventDefault();
    const { description, date } = this.state;
    this.props.onTodoAdd({ description, date });
  }
  render() {
    const { description, date } = this.state;
    return (
      <form onSubmit={(event) => this.handleFormSubmit(event)}>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            className="form-control"
            value={description}
            placeholder="Enter the todo description"
            onChange={(event) =>
              this.setState({ description: event.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(event) => this.setState({ date: event.target.value })}
          />
        </div>
        <button className="btn btn-success">Save</button>
      </form>
    );
  }
}

export default TodoAdd;
