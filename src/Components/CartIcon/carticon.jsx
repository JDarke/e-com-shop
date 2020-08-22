import React from "react";
import './carticon.styles.scss';
import { ReactComponent as ShoppingIcon} from '../../Assets/Images/shopping-bag.svg';
import {connect} from 'react-redux';
import { toggleCartDropdown } from '../../Redux/Cart/cart.actions.js';

const CartIcon = ({ toggleCartDropdown }) => (
    <div className="cart-icon" onClick={toggleCartDropdown}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">0</span>
    </div>
)

const mapDispatchToProps = dispatch => ({
    toggleCartDropdown: () => dispatch(toggleCartDropdown())
});

export default connect(null, mapDispatchToProps)(CartIcon);