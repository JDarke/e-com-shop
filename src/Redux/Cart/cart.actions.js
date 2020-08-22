import CartActionTypes from './cart.types.js';

export const toggleCartDropdown = () => ({
    type: CartActionTypes.TOGGLE_CART_DROPDOWN,
});

export const addItem = (item) => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
});