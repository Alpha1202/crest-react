import { combineReducers } from 'redux';
import isLoadingReducer from './loading.reducer';
import auth from './auth.reducer';
import accounts from './account.reducer';
import transactions from './transaction.reducer';

const reducers = combineReducers({
  auth,
 accounts,
 transactions,
  isLoadingReducer,
});

export default reducers;
