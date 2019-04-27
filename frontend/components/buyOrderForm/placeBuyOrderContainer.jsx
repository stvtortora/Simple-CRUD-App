import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import BuyOrderForm from './buyOrderForm'
import { createBuyOrder, clearErrors } from '../../actions/actions'

const mapStateToProps = (state, ownProps) => {
  const buy_order = { name: '', data_package_type: '', max_bid_price: 0 }
  const formType = 'Place Order'
  const errors = state.errors

  return { buy_order, formType, errors }
}

const mapDispatchToProps = (dispatch) => {
  return {
    action: buy_order => dispatch(createBuyOrder(buy_order)),
    clearErrors: () => dispatch(clearErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyOrderForm)
