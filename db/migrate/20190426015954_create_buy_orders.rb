class CreateBuyOrders < ActiveRecord::Migration[5.2]
  def change
    create_table :buy_orders do |t|
      t.string :name, null: false
      t.string :data_package_type, null: false
      t.float :max_bid_price, null: false
      t.timestamps
    end
  end
end
