import {
  BEGIN_LOADING,
  FETCH_TRANSACTION_DETAILS_SUCCESS,
  FETCH_TRANSACTION_DETAILS_FAILURE,
} from '../actions/types';

const initialState = {
    loading: false,
    transactionList: [],
  };

  const transactions = (state = initialState, action) => {
    switch (action.type) {
      case BEGIN_LOADING:
        return { ...state, loading: true };
      case FETCH_TRANSACTION_DETAILS_SUCCESS:
        return { ...state, transactionList: action.transactions, loading: false };
      case FETCH_TRANSACTION_DETAILS_FAILURE:
        return { ...state, loading: false };
      default:
        return state;
    }
  };
  
  export default transactions;
  
  