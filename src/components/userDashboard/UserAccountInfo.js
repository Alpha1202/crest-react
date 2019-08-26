import React from 'react';

const UserAccountInfo = props => (
    <div className="right">
      <h3>Account Balance: {props.balance}</h3>
      <h3>Account Type: {props.type}</h3>
      <span />
    </div>
  );

  export default UserAccountInfo;