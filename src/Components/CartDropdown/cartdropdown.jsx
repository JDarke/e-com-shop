import React from "react";
import CartItem from "../CartItem/cartitem.jsx";
import { connect } from "react-redux";
import { selectCartItems } from "../../Redux/Cart/cart.selectors.js";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
import CustomButton from "../Button/button.jsx";
import { toggleCartDropdown } from "../../Redux/Cart/cart.actions.js";
import "./cartdropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
          history.push("/checkout");
          dispatch(toggleCartDropdown());
        }
      }
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
