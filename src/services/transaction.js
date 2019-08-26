import { defaultUrl } from  '../config/config.json';
import { accountDetails } from "../actions/account.action";
import { connect } from 'react-redux';


const { bankaUserToken } = localStorage;

const HeaderSettings = () => ({ authorization: bankaUserToken });

const userAccountConfig= {
  headers: HeaderSettings(),
};

const getTransactionDetails = (type = 'transactions', accountnumber) => {
    const acc = 1564290631698
    return window
    .fetch(`${defaultUrl}/accounts/${accountnumber}/transactions`, userAccountConfig)
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(err => err);
}

export default getTransactionDetails;
