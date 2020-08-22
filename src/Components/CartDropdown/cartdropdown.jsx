import React from "react";
import CartItem from "../CartItem/cartitem.jsx";
import { connect } from "react-redux";
import { selectCartItems } from '../../Redux/Cart/cart.selectors.js';

import CustomButton from "../Button/button.jsx";

import "./cartdropdown.styles.scss";

const CartDropdown = ({cartItems}) => (
  <div className="cart-dropdown">
    <div className="cart-items">
        {cartItems.map(item => <CartItem key={item.id} item={item} />)}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

const mapStateToProps = state => ({
    cartItems: selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);
