import SHOP_DATA from './shop.data.js'
import ETSY_SHOP_DATA from './etsy.data.js'
import ShopActionTypes from './shop.types'

//console.log(SHOP_DATA);
//console.log(ETSY_SHOP_DATA);

/*Import sections as a seperate api action, use it to populate sections.  Then call it again for listings to populate shop.  Use redux actions...?
let data;
const asyncFunc = async () => {
    var data = await ETSY_SHOP_DATA;
    return data
}



asyncFunc().then(data => console.log(data));
//console.log(data);
*/
const INITIAL_STATE = {
    collections: null
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ShopActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            };
        default:
            return state;
    }
}

export default shopReducer;