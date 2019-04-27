import React from 'react';
import BuyOrders from './buyOrders/buyOrdersContainer';

const Manage = () => (
  <div className='manage-wrapper'>
    <fieldset className='manage'>
      <legend>Manage Orders</legend>
      <BuyOrders/>
    </fieldset>
  </div>
)

export default Manage;
