import actionTypes from '../constants/actionTypes';

const initialState = {
    loading: false,
    accountList: [],
  };

  const accounts = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.BEGIN_LOADING:
        return { ...state, loading: true };
      case actionTypes.FETCH_ACCOUNT_SUCCESS:
        return { ...state, accountList: action.accounts, loading: false };
      case actionTypes.FETCH_ACCOUNT_FAILURE:
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
  export default accounts;
  
  