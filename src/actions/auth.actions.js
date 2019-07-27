import { notify } from 'react-notify-toast';
import actions from '../constants/actionTypes';
import authenticationServices from '../services/authentication';
import errorHandler from '../helpers/errorHandler';
import contentLoading from './loading.action';

const { signIn, signUp, logOut } = authenticationServices ;

const loginSuccessStaff = token => {
    return {
      type: actions.LOGIN_SUCCESS_STAFF,
      token,
    };
  };

  const loginSuccessClient = token => {
    return {
      type: actions.LOGIN_SUCCESS_CLIENT,
      token,
    };
  };

  const loginFailure = () => {
    return {
      type: actions.LOGIN_FAILURE,
    };
  };

  const logoutSuccessful = () => {
    return {
      type: actions.LOGOUT,
    };
  };

  const signupSuccessClient = token => {
    return {
      type: actions.SIGNUP_SUCCESS_CLIENT,
      token,
    };
  };

  const login = userDetails => {
    return dispatch => {
      dispatch(contentLoading());
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
  const signup = userDetails => {
    return dispatch => {
      dispatch(contentLoading());
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
  const logout = () => {
    return dispatch => {
      dispatch(contentLoading());
      return (
        logOut('logout')
    )
}
  }

const authAction = {
    login,
    signup,
    logout,
    logoutSuccessful,
    loginSuccessStaff,
    loginSuccessClient,
    loginFailure,
    signupSuccessClient
  };
  
  export default authAction;
  