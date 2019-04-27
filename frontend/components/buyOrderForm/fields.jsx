import React from 'react'

const Fields = ({ update, state }) => (
  <div className='fields'>
    <label htmlFor="name">
      <span>Order Name <span className='required-field'>*</span></span>
      <input
      type="text"
      value={state.name}
      name="name"
      onChange={update('name')} />
    </label>

    <label htmlFor="data_package_type">
      <span>Data Package Type <span className='required-field'>*</span></span>
      <select
      value={state.data_package_type}
      name="data_package_type"
      onChange={update('data_package_type')}>
        <option value=""></option>
        <option value="Device Location">Device Location</option>
        <option value="Device Behavior">Device Behavior</option>
        <option value="ID Mapping">ID Mapping</option>
      </select>
    </label>

    <label htmlFor="max_bid_price">
      <span>Max Bid Price <span className='required-field'>*</span></span>
      <input
      type="number"
      min="0"
      max="1000000000000000"
      step="0.01"
      value={state.max_bid_price}
      name="max_bid_price"
      onChange={update('max_bid_price')} />
    </label>
  </div>
)

export default Fields;
