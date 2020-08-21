import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Header from './Components/header/header.jsx'
import HomePage from './Pages/HomePage/homepage.jsx'
import ShopPage from './Pages/Shop/shoppage.jsx'
import SignInAndUpPage from './Pages/SignInAndUpPage/signinandup.jsx'
import { auth } from './firebase/firebase.utils.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); 
  }

  render() {
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' component={SignInAndUpPage} />
      </Switch>
    </div>
  );
  }
}

export default App;
