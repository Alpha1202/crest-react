import React, { Fragment, useState } from 'react'
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import '../../styles/user-dashboard.css';
import '../../styles/admin-dashboard.css';
import '../../styles/table.css';
import { accounts as dispatchAccounts } from '../../actions/account.action';
import image from '../../images/logo.png';
import Toggle from '../../components/shared/Toggle/Toggle';
import SideBar from '../../components/shared/Links/SideBar';
import NavBar from './NavBar';
import SummaryBox from './SummaryBox';
import List from './List';

export const AdminDashboard = ( { accounts: {allAccounts, activeAccounts, dormantAccounts} } ) => {
  const [clicked, setClicked] = useState(0);
  let currAccounts = clicked === 0 ? allAccounts : activeAccounts;
  currAccounts = clicked === 2 ? dormantAccounts : currAccounts;
  return (
    <Fragment>
        <div className='wrapper'>
          <div className='header'>
            <Toggle />
            <NavBar />
          </div>
          <div className='box-wrapper'>
            <div className='side top-box'>
              <div className='left-image'>
                <figure>
                  <img src={image} alt='Logo' />
                  <figcaption>
                    <strong>Banka</strong>
                  </figcaption>
                </figure>
              </div>
              <hr />
              <SideBar
              clicked={clicked}
              setClicked={setClicked}
              />
            </div>
            <div className='showcase' id='main'>
              <div className='div-box'>
                <SummaryBox
                  clicked={clicked}
                  setClicked={setClicked}
                />
                <List 
                accounts={currAccounts}
                clicked={clicked}
                />
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p>Banka</p>
        </footer>
      </Fragment>
  )
};
  
const mapStatetoProps = ({accounts}) => ({accounts});

const didMount = () => {
  dispatchAccounts();
}

export default compose(
  connect(
    mapStatetoProps,
  ),
  lifecycle({
    componentDidMount: didMount,
  }),
)(AdminDashboard);