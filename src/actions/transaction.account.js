import { notify } from 'react-notify-toast';
import { 
    FETCH_TRANSACTION_DETAILS_SUCCESS,
    FETCH_TRANSACTION_DETAILS_FAILURE
} from './types';
import getTransactionDetails from '../services/transaction';


export const getTransactionDetailsSuccesful = () => {
    return {
        type: FETCH_TRANSACTION_DETAILS_SUCCESS,
    };
};
export const getTransactionDetailsFailure = () => {
    return {
        type: FETCH_TRANSACTION_DETAILS_FAILURE,
    };
};

export const transactionDetails = (accountnumber) => {
    return dispatch => {
        return getTransactionDetails('transactions', accountnumber).then(res => {
            if(res.status >= 400) {
                dispatch(getTransactionDetailsFailure());
                notify.show(errorHandler(res.error), 'error');
            }

            if (res.status === 200) {
                const { accountnumber, balance,status,type} = res.data[0];
                dispatch(getTransactionDetailsSuccesful());
            }
    })
}
}
