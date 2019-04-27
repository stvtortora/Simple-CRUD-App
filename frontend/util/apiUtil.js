export const createBuyOrder = buy_order => {
  return $.ajax({
    method: 'POST',
    url: 'api/buy_orders',
    data: { buy_order }
  })
}

export const deleteBuyOrder = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/buy_orders/${id}`
  })
}

export const fetchBuyOrders = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/buy_orders'
  })
}

export const updateBuyOrder = buy_order => {
  return $.ajax({
    method: 'PATCH',
    url: `api/buy_orders/${buy_order.id}`,
    data: { buy_order }
  })
}
