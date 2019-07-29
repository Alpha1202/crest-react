import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import "../../styles/user-dashboard.css";
import "../../styles/table.css";
import transactionAction from "../../actions/transaction.account";

import accountAction from "../../actions/account.action";

const { accountDetails } = accountAction;
const { transactionDetails } = transactionAction;

class TransactionDetails extends Component {
    constructor(props) {
        super(props);
      }
    // getTransactionDetails = () => {
    //     const { transactionDetails } = this.props;
    //     console.log(transactionDetails())
    //     return transactionDetails();
    // };
    componentDidMount() {
    const { transactionDetails, account, acc } = this.props;
        // if (account.accountnumber) {
        //   const res = await transactionDetails(account.accountnumber);
        //   console.log(res, '>>>>>>>>>>>>>>>>>>')
        // }
      }
    render() { 
     
      const { props: { account } } = this
      const { accountnumber} = account;
      transactionDetails(null, accountnumber);
     
        return ( 
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
    }
};
// export default TransactionDetails;
const mapStatetoProps = state => {
  return {
    account: state.accounts,
    transaction: state.transactions,
  }
};

  
  export default connect(mapStatetoProps, {transactionDetails, accountDetails})(TransactionDetails);
 
