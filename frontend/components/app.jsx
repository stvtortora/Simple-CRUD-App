import React from 'react';
import { Route } from 'react-router-dom';
import TopBar from './topBar/topBar';
import PlaceBuyOrderForm from './buyOrderForm/placeBuyOrderContainer';
import EditBuyOrderForm from './buyOrderForm/editBuyOrderContainer';
import BuyOrders from './manage/manage';
import NarrativeLogo from './narrativeLogo';

const App = () => (
  <content>
    <div className='footer-push'>
      <TopBar/>
      <Route path='/' exact component={PlaceBuyOrderForm} />
      <Route path='/manageOrders' exact component={BuyOrders} />
      <Route path='/manageOrders/:id' exact component={EditBuyOrderForm} />
    </div>
    <footer><NarrativeLogo/></footer>
  </content>
)

export default App;
