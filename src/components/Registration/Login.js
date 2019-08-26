import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Input from "./../Input";
import "../../styles/homepage.css";
import{ login } from '../../actions/auth.actions';


export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginDetails: {},
    };
  }
  onInputChange = event => {
    const { loginDetails } = this.state;
    loginDetails[event.target.id] = event.target.value;
    this.setState({ loginDetails });
  };

  onButtonSubmit = async event => {
    event.preventDefault();
    const { loginDetails } = this.state;
    const { login } = this.props;
    login(loginDetails);
  };
  render() {
    const { loginDetails } = this.state;
    const { auth, isLoadingReducer } = this.props;
    const { staff, client, redirect } = auth;
    return (
        <>
      <form id="loginUser" onSubmit={this.onButtonSubmit}>
        <Input
        id={"email"}
          type={"text"}
          title={"email"}
          name={"email"}
          value={loginDetails.email}
          placeholder={"Email"}
          onChange={this.onInputChange}
          required
        />{" "}
        <Input
        id={"password"}
          type={"password"}
          title={"password"}
          name={"password"}
          value={loginDetails.password}
          placeholder={"password"}
        onChange={this.onInputChange}
          required
        />{" "}
        <Input
                id={"submit"}
                type={"submit"}
                name={""}
                value={"Sign In"}
                className={"primary-btn"}
              />
              <div className="links">
        <Link to="/">Forgot Password</Link>
      </div>
      <div className="or">
        <div className="bar" />
        <span>OR</span>
        <div className="bar" />
      </div>
      <Link to="/signup" className="secondary-btn">Sign Up</Link>
      <footer id="main-footer">
        <p>Banka&copy; 2019</p>
        <div>
          <Link to="/">terms of use</Link> | <Link to="/">Privacy</Link> |
          <Link to="/adminLogin">admin</Link>
        </div>
      </footer>
      </form>
      {client && redirect &&  <Redirect to="/userDashboard" />}
      </>
    );
  }
}
const mapStatetoProps = state => ({
   auth: state.auth,
  });

export default connect(mapStatetoProps, { login })(Login)
