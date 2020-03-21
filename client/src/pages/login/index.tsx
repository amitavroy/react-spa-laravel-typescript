import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="login-page">
          <div className="login-box">
            <div className="login-logo">
              <a href="#"><b>Admin</b>LTE</a>
            </div>

            <div className="card">
              <div className="card-body login-card-body">
                <p className="login-box-msg">Sign in to start your session</p>

                <form action="../../index3.html" method="post">
                  <div className="input-group mb-3">
                    <input type="email" className="form-control" placeholder="Email" />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-envelope"></span>
                      </div>
                    </div>
                  </div>
                  <div className="input-group mb-3">
                    <input type="password" className="form-control" placeholder="Password" />
                    <div className="input-group-append">
                      <div className="input-group-text">
                        <span className="fas fa-lock"></span>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-8">
                      <div className="icheck-primary">
                        <input type="checkbox" id="remember" />
                        <label>Remember Me</label>
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
