import { defaultUrl } from  '../config/config.json';
import accountAction from "../actions/account.action";
import { connect } from 'react-redux';
const { accountDetails } = accountAction;

const { bankaUserToken } = localStorage;

const HeaderSettings = () => ({ authorization: bankaUserToken });

const userAccountConfig= {
  headers: HeaderSettings(),
};

const getTransactionDetails = (type = 'transactions', accountnumber) => {
    // console.log(this.props.accounts)
    // const { accountnumber} = this.props.accounts
    const acc = 1564290631698
    return window
    .fetch(`${defaultUrl}/accounts/${accountnumber}/transactions`, userAccountConfig)
    .then(resp => resp.json())
    .then(resp => resp)
    .catch(err => err);
}

export default getTransactionDetails;
// const mapStatetoProps = state => ({
//     accounts: state.accounts,
//   });
  
//   export default connect(
//     mapStatetoProps,
//     // { accountDetails}
//   )(getTransactionDetails);