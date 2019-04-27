import React from 'react'
import { connect } from 'react-redux'
import { deleteBuyOrder } from '../../../actions/actions'

class RemoveConfirmation extends React.Component {
  constructor (props) {
    super(props)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete () {
    this.props.toggleModal()
    this.props.deleteBuyOrder(this.props.id)
  }

  render () {
    return (
      <div>
        <h3>Are you sure you want to remove this order?</h3>
        <button className='remove-button' onClick={this.handleDelete}> Yes, Remove</button>
        <p className='cancel-button' onClick={this.props.toggleModal}>Cancel</p>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteBuyOrder: id => dispatch(deleteBuyOrder(id))
  }
}

export default connect(null, mapDispatchToProps)(RemoveConfirmation)
