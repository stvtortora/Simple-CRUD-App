@buy_orders.each do |buy_order|
  json.set! buy_order.id do
    json.partial! 'buy_order', buy_order: buy_order
  end
end
