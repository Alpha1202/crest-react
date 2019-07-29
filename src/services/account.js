import { defaultUrl } from  '../config/config.json';
const { bankaUserToken } = localStorage;

const HeaderSettings = () => ({ authorization: bankaUserToken });

const userAccountConfig= {
  headers: HeaderSettings(),
};

const getAccountDetails = (type = 'accounts') => {
    const { bankaUserEmail } = localStorage;
    return window
    .fetch(`${defaultUrl}/users/${bankaUserEmail}/accounts`, userAccountConfig)
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(err => err);
}

export default {
    getAccountDetails
}