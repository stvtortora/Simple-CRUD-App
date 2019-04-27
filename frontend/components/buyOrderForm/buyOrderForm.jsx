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

  componentDidUpdate (prevProps) {
    if (this.props.buy_order !== prevProps.buy_order) {
      this.setState(this.props.buy_order)
    }
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e) {
    const savedState = this.state
    const { clearErrors, action, history, errors } = this.props;
    e.preventDefault()
    clearErrors();

    action(this.state).then(response => {
      history.push('/manageOrders')
    },
    () => {
      this.setState(savedState)
    })
  }

  renderErrors () {
    return this.props.errors.map(error => {
      return <li className='error-message' key={error}>{error}</li>
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
