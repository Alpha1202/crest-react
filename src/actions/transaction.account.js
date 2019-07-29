import { notify } from 'react-notify-toast';
import actions from '../constants/actionTypes';
import getTransactionDetails from '../services/transaction';
import errorHandler from '../helpers/errorHandler';
import contentLoading from './loading.action';

// const { getTransactionDetails } = transactionServices;

const getTransactionDetailsSuccesful = () => {
    return {
        type: actions.FETCH_TRANSACTION_DETAILS_SUCCESS,
    };
};
const getTransactionDetailsFailure = () => {
    return {
        type: actions.FETCH_TRANSACTION_DETAILS_FAILURE,
    };
};

const transactionDetails = (accountnumber) => {
    return dispatch => {
        dispatch(contentLoading());
        return getTransactionDetails('transactions', accountnumber).then(res => {
            if(res.status >= 400) {
                dispatch(getTransactionDetailsFailure());
                notify.show(errorHandler(res.error), 'error');
            }

            if (res.status === 200) {
                console.log(res)
                const { accountnumber, balance,status,type} = res.data[0];
                // localStorage.accountnumber = accountnumber;
                // localStorage.balance = balance;
                // localStorage.status = status;
                // localStorage.type = type;
                dispatch(getTransactionDetailsSuccesful());
            }
    })
}
}




const transactionAction = {
    getTransactionDetailsSuccesful,
    getTransactionDetailsFailure,
    transactionDetails
};

export default transactionAction;
