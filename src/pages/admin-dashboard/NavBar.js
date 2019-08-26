import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import Logout from '../../components/Registration/Logout';

const NavBar = () => {
  return (
    <Fragment>
      <nav className="nav">
          
        <ul className="navList">
          <li className="nav-items">
            <a className="navLinks" href="#">
              Dashboard
            </a>
          </li>
          <li className="nav-items">
            <a className="navLinks" href="#">
              Accounts
            </a>
          </li>
          <li className="nav-items">
            <a className="navLinks" href="#">
              Active Accounts
            </a>
          </li>
          <li className="nav-items">
            <a className="navLinks" href="#">
              Dormant Accounts
            </a>
          </li>
        </ul>
      </nav>
      <div className="dropdown">
        <div className="header-greeting">
          Welcome <span>Admin</span> <i className="fas fa-sort-down" />
        </div>
        <div className="dropdown-content">
          <Link to="/createadmin" className="dropdown-list" href="#" id="createAdmin">
            Create Admin{" "}
          </Link>
         <Logout history={history}/>
        </div>
      </div>
    </Fragment>
  );
};

export default NavBar;
