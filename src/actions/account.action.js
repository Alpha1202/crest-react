import { notify } from 'react-notify-toast';
import actions from '../constants/actionTypes';
import accountServices from '../services/account';
import errorHandler from '../helpers/errorHandler';
import contentLoading from './loading.action';

const { getAccountDetails } = accountServices;

const getAccountDetailsSuccesful = (accountnumber,balance,status,accType) => {
    return {
        type: actions.FETCH_ACCOUNT_DETAILS_SUCCESS,
        accountnumber,
        balance,
        status,
        accType
    };
};
const getAccountDetailsFailure = () => {
    return {
        type: actions.FETCH_ACCOUNT_DETAILS_FAILURE,
    };
};

const accountDetails = () => {
    return dispatch => {
        dispatch(contentLoading());
        return getAccountDetails('accounts').then(res => {
            if(res.status >= 400) {
                dispatch(getAccountDetailsFailure());
                notify.show(errorHandler(res.error), 'error');
            }

            if (res.status === 200) {
                const { accountnumber, balance,status,type} = res.data[0];
                // localStorage.accountnumber = accountnumber;
                // localStorage.balance = balance;
                // localStorage.status = status;
                // localStorage.type = type;
                dispatch(getAccountDetailsSuccesful(accountnumber, balance, status,type));
            }
        })
    }
}

const accountAction = {
    getAccountDetailsSuccesful,
    getAccountDetailsFailure,
    accountDetails
};

export default accountAction;
