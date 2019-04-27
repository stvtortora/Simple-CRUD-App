import React from 'react';
import { connect } from 'react-redux';
import BuyOrderForm from './buyOrderForm'
import {withRouter} from 'react-router'
import { updateBuyOrder, clearErrors } from '../../actions/actions'

const mapStateToProps = (state, ownProps) => {
  const orderId = ownProps.location.pathname.slice(14)
  const defaultOrder= { name: '', data_package_type: '', max_bid_price: 0 }

  const buy_order = state.buyOrders[orderId] || defaultOrder
  const formType = 'Update Buy Order'
  const errors = state.errors

  return { buy_order, formType, errors }
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: buy_order => dispatch(updateBuyOrder(buy_order)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BuyOrderForm));
