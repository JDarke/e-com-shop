import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './Components/header/header.jsx'
import HomePage from './Pages/HomePage/homepage.jsx'
import ShopPage from './Pages/Shop/shoppage.jsx'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
