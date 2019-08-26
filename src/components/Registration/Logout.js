import React, { Component } from "react";
import { Link } from 'react-router-dom';
import "../../styles/user-dashboard.css";
import "../../styles/table.css";
import { logout }  from "../../actions/auth.actions";
import Store from "../../store/store";



const Logout = ({ history }) => (
  <>
    <Link
      onClick={() => {
        logout()(Store.dispatch);
        history.push("/");
      }}
    >
      <i className="fas fa-sign-out-alt" />
      Logout
    </Link>
  </>
);

export default Logout;

