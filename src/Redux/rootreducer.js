import {combineReducers } from 'redux';
import userReducer from './User/user.reducer.js'
import cartReducer from './Cart/cart.reducer.js'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import directoryReducer from './Directory/directory.reducer.js'
import shopReducer from './Shop/shop.reducer.js'


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: userReducer, 
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);