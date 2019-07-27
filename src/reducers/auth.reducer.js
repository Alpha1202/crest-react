import actionTypes from '../constants/actionTypes';

const initialState = {
    client: false,
    staff: false,
    redirect: false,
    token: null,
  };
  
  const auth = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.LOGIN_FAILURE:
        return { ...state };
      case actionTypes.SIGNUP_FAILURE:
        return {...state};
      case actionTypes.LOGOUT:
        return {
          ...state,
          client: false,
          redirect: true
      };
      case actionTypes.LOGIN_SUCCESS_STAFF:
        return {
          ...state,
          staff: true,
          redirect: true,
          token: action.token,
        };
      case actionTypes.LOGIN_SUCCESS_CLIENT:
        return {
          ...state,
          client: true,
          redirect: true,
          token: action.token,
        };
      case actionTypes.SIGNUP_SUCCESS_CLIENT:
        return {
          ...state,
          client: true,
          redirect: true,
          token: action.token,
        };
      default:
        return state;
    }
  };
  
  export default auth;