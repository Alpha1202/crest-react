import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import '../../../styles/user-dashboard.css';
import '../../../styles/admin-dashboard.css';
import '../../../styles/table.css';
import { accounts, activeAccounts, dormantAccounts } from '../../../actions/account.action';
import Store from '../../../store/store';
import Logout from '../../Registration/Logout';


export const SideBar = ({clicked, setClicked}) => (
    <Fragment>
      <div className="left-links">
        <ul>
          <li key={1} id="nav-acc">
            <Link
              to="#"
              id="side-users"
              className={clicked === 0 ? ' selected': ''}
              onClick={() => {
                accounts()(Store.dispatch);
                setClicked(0);
              }}
            >
              <i className="fas fa-users" />
              All Accounts
            </Link>
          </li>
          <li key={2} id="nav-active">
            <Link 
            to="#" 
            id="side-active" 
            className={clicked === 1 ? ' selected': ''}
            onClick={() => {
              activeAccounts()(Store.dispatch);
              setClicked(1);
            }}
            >
              <i className="fas fa-chart-line" />
              Active Accounts
            </Link>
          </li>
          <li key={3} id="nav-dormant">
            <Link 
            to="#" 
            id="side-deactive"
            className={clicked === 2 ? ' selected': ''}
            onClick={() => {
              dormantAccounts()(Store.dispatch);
              setClicked(2);
            }}
             >
              <i className="fas fa-bell-slash" />
              Dormant Accounts
            </Link>
          </li>
          <Logout history={history} />
        </ul>
      </div>
    </Fragment>
  );

const mapStatetoProps = state => ({
  account: state.accounts
})

export default connect(
  mapStatetoProps,
  { activeAccounts, accounts, dormantAccounts }
)(SideBar)
