import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../styles/user-dashboard.css';
import '../styles/table.css';
import Toggle from '../components/shared/Toggle/Toggle';
import AccountDetails from '../components/Accounts/AccountDetails';
import { accountDetails } from '../actions/account.action';
import TransactionDetails from '../components/Transactions/TransactionDetails';
import { transactionDetails } from '../actions/transaction.account';
import SideNavBar from '../components/userDashboard/SideNavBar';
import UserAccountInfo from '../components/userDashboard/UserAccountInfo';


export class UserDashboard extends Component {
  
  componentDidMount(){
   this.props.accountDetails()
   
  }
  getAccountDetails = () => {
    const { accountnumber} = this.props.account;
  }
  render() {
  const { balance, accType, accountnumber } = this.props.account

  const {bankaUserfirstName, bankaUserlastName} = localStorage;
  
  const firstName = JSON.parse(bankaUserfirstName);
  const lastname = JSON.parse(bankaUserlastName);

  const Name = `${firstName.toUpperCase()} ${lastname.toUpperCase()}`
    return (
      <>
      <div className="wrapper">
        <Toggle />
        <div className="box-wrapper">
          <SideNavBar history={this.props.history}/>
          <div className="showcase" id="main">
            <UserAccountInfo 
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
      <p>Banka</p>
      </>
    );
  }
}
const mapStatetoProps = state => ({
  account: state.accounts,
  transaction: state.transactions
});

export default connect(mapStatetoProps, {accountDetails, transactionDetails})(UserDashboard);

