import React from 'react'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { clearErrors } from '../../actions/actions'

class Navigation extends React.Component {
  constructor (props) {
    super(props)
    this.navigateTo = this.navigateTo.bind(this);
  }

  navigateTo (path) {
    this.props.clearErrors();
    this.props.history.push(path)
  }

  render () {
    return (
      <ul className='navigation'>
        <li onClick={() => this.navigateTo('/')}>Place an order</li>
        <li onClick={() => this.navigateTo('/manageOrders')}>Manage Orders</li>
      </ul>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    clearErrors: () => dispatch(clearErrors())
  }
}

export default withRouter(connect(null, mapDispatchToProps)(Navigation));
