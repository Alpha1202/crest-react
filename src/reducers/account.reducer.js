import actionTypes from '../constants/actionTypes';

const initialState = {
    loading: false,
    accountnumber: null,
    balance: null,
    status: null,
    accType: null
  };

  const accounts = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.BEGIN_LOADING:
        return { 
          ...state, 
          loading: true 
        };
      case actionTypes.FETCH_ACCOUNT_DETAILS_SUCCESS:
        return {
           ...state,
           accountnumber: action.accountnumber,
           balance: action.balance,
           status: action.status,
           accType: action.accType,
           loading: false
          };
      case actionTypes.FETCH_ACCOUNT_FAILURE:
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
  export default accounts;
  
  