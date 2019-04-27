class BuyOrder < ApplicationRecord
  validates :name, :data_package_type, :max_bid_price, presence: true

  validates :name, length: {minimum: 2, maximum: 25, message: "must be between 2 and 25 characters."}

  validates :data_package_type,
  inclusion: {
    in: ['Device Location', 'Device Behavior', 'ID Mapping'],
    message: "'%{value}' is not valid."
  }

  validate :valid_max_bid_price?

  private

  def valid_max_bid_price?
    if max_bid_price.to_f != max_bid_price.to_f.round(2)
      errors.add(:max_bid_price, "should have at most two digits after the decimal.")
    end
  end
end
