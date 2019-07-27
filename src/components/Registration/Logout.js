import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import "../../styles/user-dashboard.css";
import "../../styles/table.css";
import auth from '../../actions/auth.actions';

const { logout } = auth;

class Logout extends Component {
    constructor(props) {
        super(props);
    }
    onClick = () => {
        const { logout } = this.props;
        logout();
    }
    render() { 
        const { auth } = this.props;
        const { redirect } = auth
        return ( 
            <>
            <Link onClick={this.onClick}>
            <i className="fas fa-sign-out-alt" />
            Logout
          </Link>
          </>
         );
    }
}

const mapStatetoProps = state => ({
    auth: state.auth
})
 
export default connect(mapStatetoProps, {logout})(Logout);

