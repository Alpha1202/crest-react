import { notify } from 'react-notify-toast';
import {
  LOGIN_SUCCESS_STAFF,
  LOGIN_SUCCESS_CLIENT,
  LOGIN_FAILURE,
  LOGOUT,
  SIGNUP_SUCCESS_CLIENT,
 } from './types';

import authenticationServices from '../services/authentication';


const { signIn, signUp, adminSignIn, logOut } = authenticationServices ;

export const loginSuccessStaff = token => {
    return {
      type: LOGIN_SUCCESS_STAFF,
      token,
    };
  };

 export const loginSuccessClient = token => {
    return {
      type: LOGIN_SUCCESS_CLIENT,
      token,
    };
  };

 export const loginFailure = () => {
    return {
      type: LOGIN_FAILURE,
    };
  };

 export const logoutSuccessful = () => {
    return {
      type: LOGOUT,
    };
  };

 export const signupSuccessClient = token => {
    return {
      type: SIGNUP_SUCCESS_CLIENT,
      token,
    };
  };

 export const login = userDetails => {
    return dispatch => {
      return signIn('signin', userDetails).then(res => {
        if (res.status >= 400) {
          dispatch(loginFailure());
          notify.show(errorHandler(res.error), 'error');
        }

        if (res.status === 200) {
          const { email, firstName, lastName, token } = res.data;
          localStorage.bankaUserEmail = email;
          localStorage.bankaUserfirstName = JSON.stringify(firstName);
          localStorage.bankaUserlastName = JSON.stringify(lastName);
          localStorage.bankaUserToken = `bearer ${token}`;
          dispatch(loginSuccessClient(token));
          }
    })
}
};
export const signup = userDetails => {
    return dispatch => {
      return signUp('signup', userDetails).then(res => {
        if (res.status >= 400) {
          dispatch(loginFailure());
          notify.show(errorHandler(res.error), 'error');
        }

        if (res.status === 201) {
          const { email, firstName, lastName, token } = res.data;
          localStorage.bankaUserEmail = email;
          localStorage.bankaUserfirstName = JSON.stringify(firstName);
          localStorage.bankaUserlastName = JSON.stringify(lastName);
          localStorage.bankaUserToken = `bearer ${token}`;
          dispatch(signupSuccessClient(token));
          }
    })
}
};
export const adminLogin = userDetails => {
    return dispatch => {
      return adminSignIn('signin', userDetails).then(res => {
        if (res.status >= 400) {
          dispatch(loginFailure());
          notify.show(errorHandler(res.error), 'error');
        }

        if (res.status === 200) {
          const { email, firstName, lastName, token } = res.data;
          localStorage.bankaStaffEmail = email;
          localStorage.bankaStafffirstName = JSON.stringify(firstName);
          localStorage.bankaStafflastName = JSON.stringify(lastName);
          localStorage.bankaStaffToken = `bearer ${token}`;
          dispatch(loginSuccessStaff(token));
          }
    })
}
};
export  const logout = () => {
    return dispatch => {
      return (
        logOut('logout')
    )
}
  }


  