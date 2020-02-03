import { combineReducers } from 'redux';
import products from './products';
import cart from './addToCart'
import messagea from './message'
const rootReducers = combineReducers({
    products,
    cart,
    messagea
})

export default rootReducers