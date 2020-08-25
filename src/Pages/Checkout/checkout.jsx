import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import StripeCheckoutButton from '../../Components/StripeButton/stripebutton.jsx'
import {
  selectCartItems,
  selectCartTotal,
} from "../../Redux/Cart/cart.selectors.js";
import CheckoutItem from '../../Components/CheckoutItem/checkoutitem.jsx';

const Checkout = ({ cartItems, cartTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>

      <div className="header-block">
        <span>Description</span>
      </div>

      <div className="header-block">
        <span>Quantity</span>
      </div>

      <div className="header-block">
        <span>Price</span>
      </div>

      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => 
      <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
    )}
    <div className="total"><span>£{cartTotal}</span></div>
    <div className="test-warning">*Please use the following test credit card for payments*<br/>4242 4242 4242 4242 - Exp: 01/20 - CVV: 123</div>
    <StripeCheckoutButton price={cartTotal} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
