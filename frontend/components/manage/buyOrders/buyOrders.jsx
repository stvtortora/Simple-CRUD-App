import React from 'react';
import BuyOrder from './buyOrder'

class BuyOrders extends React.Component {
  componentDidMount () {
    this.props.fetchBuyOrders();
  }

  render () {
    const { buyOrders, updateDisplay } = this.props
    const buyOrderIds = Object.keys(buyOrders);

    return (
      <section className='buy-orders'>
        {
          buyOrderIds.length ?
          <div className='buy-orders-table'>
            <span className='column-names'>
              <p>Order Name</p>
              <p>Data Package Type</p>
              <p>Max Bid Price</p>
            </span>
            {
              buyOrderIds.map(id => {
                const buyOrder = buyOrders[id]
                return <BuyOrder
                key={buyOrder.id}
                id={buyOrder.id}
                name={buyOrder.name}
                data_package_type={buyOrder.data_package_type}
                max_bid_price={buyOrder.max_bid_price}/>
              })
            }
          </div>
          : <p className='default-message'>You haven't placed any orders yet.</p>
        }
      </section>
    )
  }
}

export default BuyOrders
