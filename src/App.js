import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from './Pages/HomePage/homepage.jsx'
import ShopPage from './Pages/Shop/shoppage.jsx'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
