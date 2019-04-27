import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import { deleteBuyOrder } from '../../../actions/actions'
import Modal from 'react-modal'
import EditBuyOrder from '../../buyOrderForm/editBuyOrderContainer'
import RemoveConfirmation from './removeConfirmation'

class BuyOrder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this)
    this.updatePath = this.updatePath.bind(this)
  }

  toggleModal () {
    this.setState({
      modalOpen: !this.state.modalOpen
    })
  }

  updatePath () {
    this.props.history.push(`/manageOrders/${this.props.id}`)
  }

  render () {
    const { id, name, data_package_type, max_bid_price, updateDisplay } = this.props;

    return (
      <span className='buyOrder'>
        <p>{name}</p>
        <p>{data_package_type}</p>
        <p>{`$${max_bid_price.toFixed(2)}`}</p>
        <div className='manage-buttons'>
          <p><i onClick={this.updatePath}className="fa fa-edit"></i></p>
          <p><i onClick={this.toggleModal}className="fa fa-trash-o"></i></p>
        </div>
        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.toggleModal}
          ariaHideApp={false}
          className="remove-confirmation-modal"
          >
          <RemoveConfirmation toggleModal={this.toggleModal} id={id}/>
        </Modal>
      </span>
    )
  }
}

export default withRouter(BuyOrder)
