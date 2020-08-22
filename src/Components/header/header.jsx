import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../Assets/Images/crown.svg";
import { auth } from "../../firebase/firebase.utils.js";
import { connect } from "react-redux";
import "./header.styles.scss";
import CartIcon from '../CartIcon/carticon.jsx';
import CartDropdown from '../CartDropdown/cartdropdown.jsx';

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/shop" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>
      ) : (
        <Link to="/signin" className="option">
          SIGN IN
        </Link>
      )}
     <CartIcon />
    </div>
    {!hidden && (<CartDropdown />)}
  </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
  currentUser,
  hidden
})

export default connect(mapStateToProps)(Header);
