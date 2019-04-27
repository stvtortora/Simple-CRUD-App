import { merge } from 'lodash'
import {
  RECEIVE_BUY_ORDERS, RECEIVE_BUY_ORDER, REMOVE_BUY_ORDER
} from '../actions/actions'

const buyOrdersReducer = (state = {}, action) => {
  Object.freeze(state)
  switch (action.type) {
    case RECEIVE_BUY_ORDERS:
      return (action.buyOrders)
    case RECEIVE_BUY_ORDER:
      return merge({}, state, { [action.buyOrder.id]: action.buyOrder })
    case REMOVE_BUY_ORDER:
      const newState = merge({}, state)
      delete newState[action.id]
      return newState
    default:
      return state
  }
}

export default buyOrdersReducer
