import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/logo.png';
import Logout from '../Registration/Logout';


const SideNavBar = ({history}) => (
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
            
            <Logout history={history} />
           
          </li>
  
        </ul>
      </div>
    </div>
  );

  export default SideNavBar;