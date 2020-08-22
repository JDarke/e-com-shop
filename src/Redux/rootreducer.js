import {combineReducers } from 'redux';
import userReducer from './User/user.reducer.js'
import cartReducer from './Cart/cart.reducer.js'



export default combineReducers({
    user: userReducer, 
    cart: cartReducer
});