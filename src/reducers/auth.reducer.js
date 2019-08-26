import { 
  LOGIN_FAILURE,
  SIGNUP_FAILURE,
  LOGOUT,
  LOGIN_SUCCESS_STAFF,
  LOGIN_SUCCESS_CLIENT,
  SIGNUP_SUCCESS_CLIENT
} from '../actions/types';

const initialState = {
    client: false,
    staff: false,
    redirect: false,
    token: null,
    email: null,
  };
  
  const auth = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_FAILURE:
        return { ...state };
      case SIGNUP_FAILURE:
        return {...state};
      case LOGOUT:
        return {
          ...state,
          client: false,
          redirect: true
      };
      case LOGIN_SUCCESS_STAFF:
        return {
          ...state,
          staff: true,
          redirect: true,
          token: action.token
        };
      case LOGIN_SUCCESS_CLIENT:
        return {
          ...state,
          client: true,
          redirect: true,
          token: action.token,
          email: action.email
        };
      case SIGNUP_SUCCESS_CLIENT:
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