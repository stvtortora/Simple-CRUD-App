export const RECEIVE_BUY_ORDERS = "RECEIVE_BUY_ORDERS"
export const RECEIVE_BUY_ORDER = "RECEIVE_BUY_ORDER"
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"
export const REMOVE_BUY_ORDER = "REMOVE_BUY_ORDER"
export const CLEAR_ERRORS = "CLEAR_ERRORS"
import * as APIUtil from '../util/apiUtil'

export const clearErrors = () => ({ type: CLEAR_ERRORS })

export const createBuyOrder = buy_order => {
  return dispatch => {
    return APIUtil.createBuyOrder(buy_order).then(buyOrder => {
      return dispatch({type: RECEIVE_BUY_ORDER, buyOrder})
    },
    errors => {
      return dispatch({type: RECEIVE_ERRORS, errors: errors.responseJSON})
    })
  }
}

export const deleteBuyOrder = id => {
  return dispatch => {
    return APIUtil.deleteBuyOrder(id).then(() => {
      return dispatch({type: REMOVE_BUY_ORDER, id})
    })
  }
}

export const fetchBuyOrders = () => {
  return dispatch => {
    return APIUtil.fetchBuyOrders().then(buyOrders => {
      return dispatch({type: RECEIVE_BUY_ORDERS, buyOrders})
    })
  }
}

export const updateBuyOrder = buy_order => {
  return dispatch => {
    return APIUtil.updateBuyOrder(buy_order).then(buyOrder => {
      return dispatch({type: RECEIVE_BUY_ORDER, buyOrder})
    },
    errors => {
      return dispatch({type: RECEIVE_ERRORS, errors: errors.responseJSON})
    })
  }
}
