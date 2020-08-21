import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';

import HomePage from './Pages/HomePage/homepage.jsx'


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
