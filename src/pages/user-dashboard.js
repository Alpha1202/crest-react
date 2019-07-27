import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../styles/user-dashboard.css";
import "../styles/table.css";
import image from "../images/logo.png";
import Logout from "../components/Registration/Logout";

const Toggle = () => (
  <div className="header" id="dashboard">
    <span className="open-slide">
      <Link to="#" id="openSlideMenu">
        <svg width="30" height="30">
          <path d="M0,5 30,5" stroke="#fff" strokeWidth="5" />
          <path d="M0,14 30,14" stroke="#fff" strokeWidth="5" />
          <path d="M0,23 30,23" stroke="#fff" strokeWidth="5" />
        </svg>
      </Link>
    </span>
    <h1>Dashboard</h1>
  </div>
);

const SideNavBar = () => (
  <div className="side top-box">
    <div className="left-image">
      <figure>
        <Link to="/"><img src={image} alt="Logo" /></Link>
        <figcaption>
          <strong>Banka</strong>
        </figcaption>
      </figure>
    </div>
    <hr />
    <div className="left-links">
      <ul>
        <li>
          <Link to="#dashboard" className="selected">
            <i className="fas fa-home fa-1x" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link to="#" id="links">
            <i className="fas fa-envelope-open" />
            Create Account
          </Link>
        </li>
        <li>
          <Link to="#account-details">
            <i className="fas fa-eye" />
            View Account
          </Link>
        </li>
        <li>
          <Link to="#transaction">
            <i className="fas fa-search-dollar" />
            Transactions
          </Link>
        </li>
        <li>
          <Logout />
        </li>
      </ul>
    </div>
  </div>
);


const AccountDetails = () => (
  <section className="boxes boxes-small box-account">
    <div className="box account">
      <Link id="account-details">
        <h1>Account Details:</h1>
        <span />
        <div className="table">
          <div className="table-row" id="accountTable">
            <div className="table-head">Name :</div>
            <div className="table-body">Nnamani Nzubechukwu</div>
          </div>
          <div className="table-row">
            <div className="table-head">Account Number :</div>
            <div className="table-body">NO ACCOUNT YET</div>
          </div>
          <div className="table-row">
            <div className="table-head">Account Balance</div>
            <div className="table-body">$0.00</div>
          </div>
          <div className="table-row">
            <div className="table-head">Account Type</div>
            <div className="table-body">N/A</div>
          </div>
          <div className="table-row">
            <div className="table-head">Account Status</div>
            <div className="table-body">N/A</div>
          </div>
        </div>
      </Link>
    </div>
  </section>
);

const Transactions = () => (
  <section className="boxes boxes-small">
    <div className="box">
      <Link id="transaction">
        <h1>Last 50 Transactions:</h1>
        <span />
        <div className="table">
          <div className="table-row2">
            <div className="table-header">Acc Number</div>
            <div className="table-header">Type </div>
            <div className="table-header">Old Balance</div>
            <div className="table-header">New Balance</div>
            <div className="table-header">Amount</div>
          </div>
          <div className="table-row2">
            <div className="table-content">003294933</div>
            <div className="table-content">Credit</div>
            <div className="table-content">$1,000,000</div>
            <div className="table-content">$ 4,000,000</div>
            <div className="table-content">$3,000,000</div>
          </div>
          <div className="table-row2">
            <div className="table-content">003294933</div>
            <div className="table-content">Credit</div>
            <div className="table-content">$1,000,000</div>
            <div className="table-content">$ 4,000,000</div>
            <div className="table-content">$3,000,000</div>
          </div>
          <div className="table-row2">
            <div className="table-content">003294933</div>
            <div className="table-content">Credit</div>
            <div className="table-content">$1,000,000</div>
            <div className="table-content">$ 4,000,000</div>
            <div className="table-content">$3,000,000</div>
          </div>
        </div>
      </Link>
    </div>
  </section>
);

const CreateAccountModal = () => (
  <div id="Modal" className="modal">
  <div id="signin" className="modal-dialog">
      <button className="modal-close">×</button>
      <div className="modal-header">
          <div className="logo modal-title">
              <Link to="/"><img src={image} alt="logo" /></Link>
          </div>
      </div>
      <div className="modal-content">
          <form action="">
              <div>
                  <label for="">Choose Account Type : </label><br />
                  <p>Savings</p> :<input type="radio" name="account" value="savings" checked className="" />
                  <p>Current</p> :<input type="radio" name="account" value="current" checked className="" />
              </div><br />
              <Link to="/userDashboard" className="primary-btn">Open Account</Link>
          </form>
      </div>
  </div>
</div>
)

const Footer = () => (
  <footer>
    <p>Banka</p>
</footer>
);
const Right = props => (
  <div className="right">
    <h3>Account Balance: $1,000,000</h3>
    <h3>Account Type: Current</h3>
    <span />
  </div>
);

class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

componentDidMount() {
  const { bankaUserEmail, bankaUserfirstName, bankaUserlastName, bankaUserToken } = localStorage;
  const Name = bankaUserfirstName.concat(bankaUserlastName);
  console.log(Name)  
}
  state = {};
  render() {
    return (
      <>
      <CreateAccountModal />
      <div className="wrapper">
        <Toggle />
        <div className="box-wrapper">
          <SideNavBar />
          <div className="showcase" id="main">
            <Right />
            <div className="div-box">
              <AccountDetails />
              <Transactions />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
    );
  }
}

export default UserDashboard;
