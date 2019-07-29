import actionTypes from '../constants/actionTypes';

const initialState = {
    loading: false,
    transactionList: [],
  };

  const transactions = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.BEGIN_LOADING:
        return { ...state, loading: true };
      case actionTypes.FETCH_TRANSACTION_DETAILS_SUCCESS:
        return { ...state, transactionList: action.transactions, loading: false };
      case actionTypes.FETCH_TRANSACTION_DETAILS_FAILURE:
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
  export default transactions;
  
  