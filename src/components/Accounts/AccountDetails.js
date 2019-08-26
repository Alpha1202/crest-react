import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../../styles/user-dashboard.css";
import "../../styles/table.css";
import { accountDetails } from "../../actions/account.action";


export class AccountDetails extends Component {
  constructor(props) {
    super(props);
  }
 
  getAccountDetails = () => {
    
    const { accountDetails } = this.props;
    accountDetails();
  };
  componentDidMount() {
    this.getAccountDetails();
  }
  render() {
    const { accountnumber,balance,status, accType} = this.props.auth
    const {name} = this.props
    return (
      <section className="boxes boxes-small box-account">
        <div className="box account">
          <Link id="account-details">
            <h1>Account Details:</h1>
            <span />
            <div className="table">
              <div className="table-row" id="accountTable">
                <div className="table-head">Name :</div>
                <div className="table-body">{name}</div>
              </div>
              <div className="table-row">
                <div className="table-head">Account Number :</div>
                <div className="table-body">{accountnumber || 'NOT AVAILABLE'}</div>
              </div>
              <div className="table-row">
                <div className="table-head">Account Balance</div>
                <div className="table-body">{balance || 'NOT AVAILABLE'}</div>
              </div>
              <div className="table-row">
                <div className="table-head">Account Type</div>
                <div className="table-body">{accType || 'NOT AVAILABLE'}</div>
              </div>
              <div className="table-row">
                <div className="table-head">Account Status</div>
                <div className="table-body">{status || 'NOT AVAILABLE'}</div>
              </div>
            </div>
          </Link>
        </div>
      </section>
    );
  }
}

const mapStatetoProps = state => ({
  auth: state.accounts,
});

export default connect(
  mapStatetoProps,
  { accountDetails}
)(AccountDetails);
