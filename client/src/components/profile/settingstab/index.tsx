import React, { Component } from "react";
import { connect } from "react-redux";

import LoadingCard from "../../common/loadingcard";
import HttpService from "../../../services/HttpService";
import UrlService from "../../../services/UrlService";
import UserStateInterface from "./../../../interfaces/UserStateInterface";
import { setUser } from "./../../../store/actions";
import Errors from "../../../services/Errors";
import ValidationErorr from "../../common/validationerror";

interface Props {
  user: UserStateInterface;
  setUser: typeof setUser;
}

class SettingsTab extends Component<Props> {
  state = {
    name: "",
    email: "",
    designation: "",
    loading: false,
    errors: Errors,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.user !== this.props.user) {
      this.updateUserObject(this.props.user.currentUser);
    }
  }

  updateUserObject(user) {
    this.setState({
      name: user.name,
      email: user.email,
      designation: user.designation,
    });
  }

  async handleFormSubmit(event) {
    event.preventDefault();
    this.state.errors.reset();

    const url = UrlService.saveUserProfileUrl();
    const postData = {
      name: this.state.name,
      designation: this.state.designation,
    };

    this.setState({ loading: true });
    const response = await HttpService.post(url, postData);

    switch (response.status) {
      case 422:
        this.state.errors.setErrors(response);
        break;
      case 200:
        this.props.setUser(response.data);
        break;
      default:
        break;
    }

    this.setState({ loading: false });
  }

  renderForm() {
    const { name, email, designation, errors } = this.state;
    return (
      <form onSubmit={(event) => this.handleFormSubmit(event)}>
        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(event) => this.setState({ name: event.target.value })}
            />
            <ValidationErorr message={errors.getKey("name")} />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              placeholder="Email"
              value={email}
              disabled
            />
          </div>
        </div>

        <div className="form-group row">
          <label className="col-sm-2 col-form-label">Designation</label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="inputName2"
              placeholder="Name"
              value={designation}
              onChange={(event) =>
                this.setState({ designation: event.target.value })
              }
            />
            <ValidationErorr message={errors.getKey("designation")} />
          </div>
        </div>
        <div className="form-group row">
          <div className="offset-sm-2 col-sm-10">
            <button type="submit" className="btn btn-danger">
              Submit
            </button>
          </div>
        </div>
      </form>
    );
  }

  render() {
    const { loading } = this.state;
    return (
      <React.Fragment>
        {loading ? <LoadingCard /> : this.renderForm()}
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { setUser })(SettingsTab);
