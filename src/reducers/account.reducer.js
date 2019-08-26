import {
  BEGIN_LOADING,
  FETCH_ACCOUNT_DETAILS_SUCCESS,
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACTIVE_ACCOUNT_SUCCESS,
  FETCH_DORMANT_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_FAILURE,
} from '../actions/types';

const initialState = {
    loading: false,
    accountnumber: null,
    balance: null,
    status: null,
    accType: null,
    allAccounts: [],
    activeAccounts: [],
    dormantAccounts: []
  };

  const accounts = (state = initialState, action) => {
    switch (action.type) {
      case BEGIN_LOADING:
        return { 
          ...state, 
          loading: true 
        };
      case FETCH_ACCOUNT_DETAILS_SUCCESS:
        return {
           ...state,
           accountnumber: action.accountnumber,
           balance: action.balance,
           status: action.status,
           accType: action.accType,
           loading: false
          };
      case FETCH_ACCOUNT_SUCCESS:
        return {
           ...state,
           allAccounts: action.account,
           loading: false
          };
      case FETCH_ACTIVE_ACCOUNT_SUCCESS:
        return {
           ...state,
           activeAccounts: action.account,
           loading: false
          };
      case FETCH_DORMANT_ACCOUNT_SUCCESS:
        return {
           ...state,
           dormantAccounts: action.account,
           loading: false
          };
      case FETCH_ACCOUNT_FAILURE:
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
  export default accounts;
  
  