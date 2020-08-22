import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./Components/header/header.jsx";
import HomePage from "./Pages/HomePage/homepage.jsx";
import ShopPage from "./Pages/Shop/shoppage.jsx";
import SignInAndUpPage from "./Pages/SignInAndUpPage/signinandup.jsx";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //this.setState({currentUser: user})
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          //console.log(snapShot)

          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          }, () => console.log(this.state));
        });
      }
      this.setState({ currentUser: userAuth });
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
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
