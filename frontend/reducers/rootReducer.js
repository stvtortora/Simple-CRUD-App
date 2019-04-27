import { combineReducers } from 'redux';
import buyOrders from './buyOrdersReducer';
import errors from './errorsReducer';

const rootReducer = combineReducers({ buyOrders, errors });

export default rootReducer;
