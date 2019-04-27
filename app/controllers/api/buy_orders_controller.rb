class Api::BuyOrdersController < ApplicationController
  def create
    @buy_order = BuyOrder.new(buy_order_params)

    if @buy_order.save
      render '/api/buy_orders/show'
    else
      render json: @buy_order.errors.full_messages, status: 422
    end
  end

  def destroy
    @buy_order = BuyOrder.find(params[:id])
    @buy_order.destroy
    render '/api/buy_orders/show'
  end

  def index
    @buy_orders = BuyOrder.all
    render '/api/buy_orders/index'
  end

  def update
    @buy_order = BuyOrder.find(params[:id])

    if @buy_order.update_attributes(buy_order_params)
      render '/api/buy_orders/show'
    else
      render json: @buy_order.errors.full_messages, status: 422
    end
  end

  private

  def buy_order_params
    params.require(:buy_order).permit(:name, :data_package_type, :max_bid_price)
  end
end
