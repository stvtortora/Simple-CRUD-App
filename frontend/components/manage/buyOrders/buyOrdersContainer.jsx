import { connect } from 'react-redux'
import { fetchBuyOrders } from '../../../actions/actions'
import BuyOrders from './buyOrders'

const mapStateToProps = state => {
  return {
    buyOrders: state.buyOrders
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchBuyOrders: () => dispatch(fetchBuyOrders())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyOrders)
