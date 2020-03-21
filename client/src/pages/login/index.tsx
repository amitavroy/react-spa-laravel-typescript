import React, { Component } from "react";
import './_style.scss';

class Login extends Component {
  state = {
    username: '',
    password: '',
    isChecked: false
  }

  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state.username, this.state.password);
  }

  handleChecked() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    const { username, password, isChecked } = this.state;
    return (
      <React.Fragment>
        <div className="login-page">
          <div className="login-box">
            <div className="login-logo">
              <a href="/" onClick={(event) => { event.preventDefault() }}><b>React</b>ADMIN</a>
            </div>

            <div className="card">
              <div className="card-body login-card-body">
                <p className="login-box-msg">Sign in to start your session</p>

                <form onSubmit={(event) => this.handleFormSubmit(event)}>
                  <div className="input-group mb-3">
                    <input type="email"
                      name="name"
                      className="form-control"
                      placeholder="Email"
                      value={username}
                      onChange={event => this.setState({ username: event.target.value })} />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope"></span>
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input type="password"
                      name="password"
                      className="form-control"
                      placeholder="Password"
                      value={password}
                      onChange={event => this.setState({ password: event.target.value })} />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <div className="icheck-primary">
                        <input type="checkbox" id="remember" onChange={() => this.handleChecked()} checked={isChecked} />
                        <label onClick={() => this.handleChecked()} id="remember-label">Remember Me</label>
                      </div>
                    </div>
                    <div className="col-4">
                      <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                    </div>
                  </div>
                </form>

                <p className="mb-1">
                  <a href="forgot-password.html">I forgot my password</a>
                </p>
                <p className="mb-0">
                  <a href="register.html" className="text-center">Register a new membership</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
