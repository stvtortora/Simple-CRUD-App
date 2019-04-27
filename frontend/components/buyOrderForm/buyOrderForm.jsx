import React from 'react'
import Fields from './fields'
import { withRouter } from 'react-router-dom'

class BuyOrderForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.update = this.update.bind(this)
    this.state = this.props.buy_order
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    const { clearErrors, action, history, errors } = this.props;
    e.preventDefault()

    action(this.state).then(() => {
      clearErrors();

      if (!errors.length) {
        history.push('/manageOrders')
      }
    })
  }

  renderErrors () {
    return this.props.errors.map(error => {
      return <li className='error-message'>{error}</li>
    })
  }

  render () {
    return (
      <div className='buy-order-form-wrapper'>
        <form onSubmit={this.handleSubmit}>
          <fieldset>
            <legend>{this.props.formType}</legend>
            { this.renderErrors() }
            <Fields update={this.update} state={this.state} />
            <input className='submit' type="submit" value={this.props.formType} />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default withRouter(BuyOrderForm)
