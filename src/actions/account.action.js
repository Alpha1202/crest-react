import { notify } from 'react-notify-toast';
import { 
    FETCH_ACCOUNT_DETAILS_SUCCESS,
    FETCH_ACTIVE_ACCOUNT_SUCCESS,
    FETCH_DORMANT_ACCOUNT_SUCCESS,
    FETCH_ACCOUNT_DETAILS_FAILURE,
    FETCH_ACCOUNT_SUCCESS
 } from './types';

import accountServices from '../services/account';


const { getAccountDetails, getAllAccounts, getActiveAccounts, getDormantAccounts } = accountServices;

export const getAccountDetailsSuccesful = (accountnumber,balance,status,accType) => {
    return {
        type: FETCH_ACCOUNT_DETAILS_SUCCESS,
        accountnumber,
        balance,
        status,
        accType
    };
};
export const getAllAccountsSuccesful = (account) => {
    return {
        type: FETCH_ACCOUNT_SUCCESS,
        account
    };
};
export const getActiveAccountsSuccesful = (account) => {
    return {
        type: FETCH_ACTIVE_ACCOUNT_SUCCESS,
        account
    };
};
export const getDormantAccountsSuccesful = (account) => {
    return {
        type: FETCH_DORMANT_ACCOUNT_SUCCESS,
        account
    };
};
export const getAccountDetailsFailure = () => {
    return {
        type: FETCH_ACCOUNT_DETAILS_FAILURE,
    };
};
export const getAccountFailure = () => {
    return {
        type: FETCH_ACCOUNT_DETAILS_FAILURE,
    };
};

export const accountDetails = () => {
    return dispatch => { 
    return getAccountDetails().then(res => {
            if(res.status >= 400) {
                dispatch(getAccountDetailsFailure());
                
            }

            if (res.status === 200) {
                const { accountnumber, balance,status,type} = res.data[0];
                dispatch(getAccountDetailsSuccesful(accountnumber, balance, status,type));
            }
        })
    }
}
export const accounts = () => {
    return dispatch => {
        return getAllAccounts().then(res => {
            if(res.status >= 400) {
                dispatch(getAccountFailure());
                
            }

            if (res.status === 200) {
                const { data} = res;
                dispatch(getAllAccountsSuccesful(data));
            }
        })
    }
}
export const activeAccounts = () => {
    return dispatch => {
        return getActiveAccounts().then(res => {
            if(res.status >= 400) {
                dispatch(getAccountFailure());
                
            }

            if (res.status === 200) {
                const { data} = res;
                dispatch(getActiveAccountsSuccesful(data));
            }
        })
    }
}
export const dormantAccounts = () => {
    return dispatch => {
        return getDormantAccounts().then(res => {
            if(res.status >= 400) {
                dispatch(getAccountFailure());
                
            }

            if (res.status === 200) {
                const { data} = res;
                dispatch(getDormantAccountsSuccesful(data));
            }
        })
    }
}

