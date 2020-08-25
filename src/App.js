import React from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Components/header/header.jsx";
import HomePage from "./Pages/HomePage/homepage.jsx";
import ShopPage from "./Pages/Shop/shoppage.jsx";
import Checkout from './Pages/Checkout/checkout.jsx';
import SignInAndUpPage from "./Pages/SignInAndUpPage/signinandup.jsx";
import { auth, createUserProfileDocument, addCollectionAndDocuments } from "./firebase/firebase.utils.js";
import { setCurrentUser } from "./Redux/User/user.actions.js";
import { selectCurrentUser } from './Redux/User/user.selectors.js';
import { createStructuredSelector } from 'reselect';

import { selectCollectionsForPreview } from './Redux/Shop/shop.selectors.js'

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser, collectionsArray } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //this.setState({currentUser: user})
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          //console.log(snapShot)
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
      addCollectionAndDocuments('collections', collectionsArray)
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={Checkout} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (<Redirect to="/" />) : (<SignInAndUpPage />)
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  collectionsArray: selectCollectionsForPreview
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
