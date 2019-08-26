import { combineReducers } from 'redux';
import auth from './auth.reducer';
import accounts from './account.reducer';
import transactions from './transaction.reducer';

const reducers = combineReducers({
  auth,
  accounts,
  transactions,
});

export default reducers;
