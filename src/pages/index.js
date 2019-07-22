import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/homepage.css";
import image from '../images/logo.png';
import Carousel from '../components/carousel.js'

const Right = (props) => (
  <div id="right">
    <div id="showcase">
      <div className="showcase-content small">
        <Carousel>
        <div className="showcase-text slide">
          <h1>
            <b>Welcome To Banka</b>
          </h1>
          <h4>
            Banka is a light-weight core banking application. It is Relaible,
            fast and very convenient
          </h4>
        </div>
        <div className="showcase-text slide">
          <h1>
            <b>Our Services</b>
          </h1>
          <h4>
            We pride ourselves with delivering super-fast core banking services
            to you.We are reliable, you can always count on us, and we care
            about your financial needs
          </h4>
        </div>
        <div className="showcase-text slide">
          <h1>
            <b>About Us</b>
          </h1>
          <h4>
            Banka is the leading core banking application accross africa and
            beyond. we are a financial service delivery group and our custmoers
            delight is our watchword
          </h4>
        </div>
        </Carousel>
      </div>
      <div className="showcase-content big">
        <div className="showcase-text">
          <h3>
            <b>Welcome To Banka</b>
          </h3>
          <a href="./signup.html" id="signUp-small" className="primary-btn">
            Sign Up
          </a>
          <a href="./login.html" id="login" className="primary-btn">
            login
          </a>
        </div>
      </div>
    </div>
  </div>
);

const Left = () => (
  <div id="left" className="left-signin">
    <div id="signin">
      <div className="logo">
        <Link to="/">
          <img src={image} alt="logo" />
        </Link>
      </div>
      <form id="loginUser">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            className="text-input"
            id="email"
            name="email"
            required
          />
        </div>
        <span id="errorHandler" />
        <br />
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            className="text-input"
            id="password"
            required
          />
        </div>
        <input
          type="submit"
          id="signin"
          className="primary-btn"
          value="Sign In"
        />
      </form>
      <div className="links">
        <Link to="/">Forgot Password</Link>
      </div>
      <div className="or">
        <div className="bar" />
        <span>OR</span>
        <div className="bar" />
      </div>
      <input
        type="submit"
        id="signUp"
        className="secondary-btn"
        value="Sign Up"
      />
      <footer id="main-footer">
        <p>Banka&copy; 2019</p>
        <div>
          <Link to="/">terms of use</Link> | <Link to="/">Privacy</Link> |
          <Link to="/adminLogin">admin</Link>
        </div>
      </footer>
    </div>
  </div>
);

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  state = {};
  render() {
    return (
      <div id="wrapper">
        <Right />
        <Left />
      </div>
    );
  }
}

export default Index;
