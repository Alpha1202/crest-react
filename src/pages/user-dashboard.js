import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import "../styles/user-dashboard.css";
import "../styles/table.css";
import image from "../images/logo.png";
import Logout from "../components/Registration/Logout";
import AccountDetails from "../components/Accounts/AccountDetails";
import account from '../actions/account.action';
import TransactionDetails from "../components/Transactions/TransactionDetails";
import transactionAction from "../actions/transaction.account";


const { accountDetails } = account;
const { transactionDetails } = transactionAction;

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


// const Transactions = () => (
  
// );

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
    <h3>Account Balance: {props.balance}</h3>
    <h3>Account Type: {props.type}</h3>
    <span />
  </div>
);

class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount(){
   this.props.accountDetails()
   
  }
  getAccountDetails = () => {
    const { accountnumber} = this.props.account;
    console.log(accountnumber, '.......')
  }
// componentDidMount(){
//   console.log(this.props)
//   this.props.transactionDetails()
// }
  render() {
    // console.log(this.props, '........')
  const { balance, accType, accountnumber } = this.props.account
  console.log(accountnumber, '......')
  const {bankaUserfirstName, bankaUserlastName} = localStorage;
  
  const firstName = JSON.parse(bankaUserfirstName);
  const lastname = JSON.parse(bankaUserlastName);

  const Name = `${firstName.toUpperCase()} ${lastname.toUpperCase()}`
    return (
      <>
      <CreateAccountModal />
      <div className="wrapper">
        <Toggle />
        <div className="box-wrapper">
          <SideNavBar />
          <div className="showcase" id="main">
            <Right 
            balance={balance || 'NOT AVAILABLE'}
            type={accType || 'NOT AVAILABLE'}/>
            <div className="div-box">
              <AccountDetails 
              name={Name} 
              />
              <TransactionDetails acc={accountnumber} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </>
    );
  }
}
const mapStatetoProps = state => ({
  account: state.accounts,
  transaction: state.transactions
});

export default connect(mapStatetoProps, {accountDetails, transactionDetails})(UserDashboard);

