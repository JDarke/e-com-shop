import React from "react";
import "./carticon.styles.scss";
import { ReactComponent as ShoppingIcon } from "../../Assets/Images/shopping-bag.svg";
import { connect } from "react-redux";
import { toggleCartDropdown } from "../../Redux/Cart/cart.actions.js";
import {selectCartItemsCount} from '../../Redux/Cart/cart.selectors.js';


const CartIcon = ({ toggleCartDropdown, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartDropdown}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartDropdown: () => dispatch(toggleCartDropdown()),
});

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
