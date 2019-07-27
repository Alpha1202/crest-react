import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import Input from "./../Input";
import Button from "../shared/Buttons/Button";
import "../../styles/homepage.css";
import auth from '../../actions/auth.actions';

const { signup } = auth;

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signupDetails: {},
    };
  }
  onInputChange = event => {
    const { signupDetails } = this.state;
    signupDetails[event.target.id] = event.target.value;
    this.setState({ signupDetails });
  };

  onButtonSubmit = async event => {
    event.preventDefault();
    const { signupDetails } = this.state;
    const { signup } = this.props;
    signup(signupDetails);
  };
  render() {
    const { signupDetails } = this.state;
    const { auth, isLoadingReducer } = this.props;
    const { staff, client, redirect } = auth;
    return (
        <>
      <form id="loginUser" onSubmit={this.onButtonSubmit}>
        <Input
        id={"firstName"}
          type={"text"}
          title={"firstName"}
          name={"firstName"}
          value={signupDetails.firstName}
          placeholder={"First Name"}
          onChange={this.onInputChange}
          required
        />{" "}
        <Input
        id={"lastName"}
          type={"text"}
          title={"lastName"}
          name={"lastName"}
          value={signupDetails.lastName}
          placeholder={"Last Name"}
          onChange={this.onInputChange}
          required
        />{" "}
        <Input
        id={"email"}
          type={"text"}
          title={"email"}
          name={"email"}
          value={signupDetails.email}
          placeholder={"Email"}
          onChange={this.onInputChange}
          required
        />{" "}
        <Input
        id={"password"}
          type={"password"}
          title={"password"}
          name={"password"}
          value={signupDetails.password}
          placeholder={"password"}
        onChange={this.onInputChange}
          required
        />{" "}
        <Input
                id={"submit"}
                type={"submit"}
                name={""}
                value={"Sign Up"}
                className={"primary-btn"}
              />
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

export default connect(mapStatetoProps, { signup })(Signup)
