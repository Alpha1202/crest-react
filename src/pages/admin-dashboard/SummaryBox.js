import React, { Fragment } from 'react';
import { Link } from 'react-router-dom'
import { accounts, activeAccounts, dormantAccounts } from '../../actions/account.action';
import Store from '../../store/store';

const SummaryBox = ({clicked, setClicked}) => (
  <Fragment>
    <div className="summary-box">
      <div className={`box selected-user-box${clicked === 0 ? ' selected': ''}`} id='allAcc'>
        <Link 
        to="#"
        id="all-acc"
        onClick={() => {
          accounts()(Store.dispatch);
          setClicked(0);
        }}>
          <i className='fas fa-users'>All Accounts</i>
        </Link>
        <h3 id='allAccounts' />
      </div>
      <div className={`box active-accounts-box${clicked === 1 ? ' selected': ''}`} id='activeAcc'>
        <Link 
        to="#"
        id="active-acc"
        onClick={() => {
          activeAccounts()(Store.dispatch);
          setClicked(1)
        }}>
          <i className='fas fa-chart-line'> Active Accounts</i>
        </Link>
        <h3 id='allActiveAccounts' />
      </div>
      <div className={`box deactive-accounts-box${clicked === 2 ? ' selected': ''}`} id='deactiveAcc'>
        <Link 
        to="#"
        id="dormant-acc"
        onClick={() => {
         dormantAccounts()(Store.dispatch);
          setClicked(2)
        }}>
          <i className='fas fa-bell-slash'> Dormant Accounts</i>
        </Link>
        <h3 id='alldeactiveAccounts' />
      </div>
    </div>
  </Fragment>
)

export default SummaryBox
