import { defaultUrl } from  '../config/config.json';
const { bankaUserToken, bankaStaffToken } = localStorage;


const HeaderSettings = () => ({ authorization: bankaUserToken });
const AdminHeaderSettings = () => ({ authorization: bankaStaffToken });

const userAccountConfig= {
  headers: HeaderSettings(),
};
const AdminAccountConfig= {
  headers: AdminHeaderSettings(),
};

const getAccountDetails = () => {
    const { bankaUserEmail } = localStorage;
    return fetch(`${defaultUrl}/users/${bankaUserEmail}/accounts`, userAccountConfig)
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(err => err);
}
const getAllAccounts = () => {
    return fetch(`${defaultUrl}/accounts`, AdminAccountConfig)
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(err => err);
    
}
const getActiveAccounts = () => {
    return fetch(`${defaultUrl}/accounts/?status=active`, AdminAccountConfig)
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(err => err);
    
}
const getDormantAccounts = () => {
    return fetch(`${defaultUrl}/accounts/?status=dormant`, AdminAccountConfig)
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(err => err);
    
}

export default {
    getAccountDetails,
    getAllAccounts,
    getActiveAccounts,
    getDormantAccounts
}