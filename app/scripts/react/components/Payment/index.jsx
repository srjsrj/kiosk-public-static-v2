import React from 'react';
import { camelizeKeys } from 'humps';
import Payment from './Payment';

function PaymentContainer(props) {
  return <Payment {...camelizeKeys(props)} />;
}

export default PaymentContainer;
