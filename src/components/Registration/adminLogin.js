import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Input from "./../Input";
import Button from "../shared/Buttons/Button";
import "../../styles/homepage.css";
import { adminLogin } from '../../actions/auth.actions';


export class LoginAdmin extends Component {
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
    const { adminLogin } = this.props;
    adminLogin(loginDetails);
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

      </footer>
      </form>
      {staff && redirect &&  <Redirect to="/adminDashboard" />}
      </>
    );
  }
}
const mapStatetoProps = state => ({
   auth: state.auth,
  });

export default connect(mapStatetoProps, { adminLogin })(LoginAdmin)
