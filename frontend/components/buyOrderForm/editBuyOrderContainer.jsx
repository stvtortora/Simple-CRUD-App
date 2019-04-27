import React from 'react';
import { connect } from 'react-redux';
import BuyOrderForm from './buyOrderForm'
import {withRouter} from 'react-router'
import { updateBuyOrder, clearErrors, fetchBuyOrder } from '../../actions/actions'

const mapStateToProps = (state, ownProps) => {
  const orderId = ownProps.location.pathname.slice(14)
  const defaultOrder= { name: '', data_package_type: '', max_bid_price: 0 }

  const buy_order = state.buyOrders[orderId] || defaultOrder
  const formType = 'Update Buy Order'
  const errors = state.errors

  return { buy_order, orderId, formType, errors }
};

const mapDispatchToProps = (dispatch) => {
  return {
    action: buy_order => dispatch(updateBuyOrder(buy_order)),
    fetchBuyOrder: id => dispatch(fetchBuyOrder(id)),
    clearErrors: () => dispatch(clearErrors())
  }
}

class EditBuyOrderForm extends React.Component {
  componentDidMount() {
    if (this.props.buy_order.name === '') {
      this.props.fetchBuyOrder(this.props.orderId)
    }
  }

  render() {
    const { action, formType, buy_order, errors, clearErrors } = this.props;
    return (
      <BuyOrderForm
        action={action}
        formType={formType}
        buy_order={buy_order}
        clearErrors={clearErrors}
        errors={errors} />
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditBuyOrderForm));
