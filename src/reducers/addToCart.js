import * as types from './../constants/ActionType';

var data = JSON.parse(localStorage.getItem('state'));
var findProductInCart = (cart, product) => {
    var index = -1
    if(cart.length > 0){
        for( var i = 0; i < cart.length; i++){
            if(cart[i].product.id === product.id){
                index = i;
                break
            }
        }
    }
    return index
}
var findIndex = (cart, id) => {
    var result = -1
    cart.forEach( (car,index) => {
        if(car.product.id === id){
            return result = index
        }
    })
    return result
}
var initialState = data ? data : []

const addToCart = (state = initialState, action) => {
    var {product, quantity,id,opera} = action
    var index = -1
    switch (action.type) {
        case types.ADD_TO_CART:
            index = findProductInCart(state, product)
            if(index !== -1){
                state[index].quantity += quantity
            }else{
                state.push({
                    product,
                    quantity
                })
            }
            localStorage.setItem('state', JSON.stringify(state))
            return [...state]
        case types.DELETED_TO_CART:
            index = findIndex(state,id)
            if(index !== -1){
                state.splice(index,1)
            }
            localStorage.setItem('state', JSON.stringify(state))
            return [...state]
        case types.UPDATE_AMOUNT_IN_PRODUCT:
            if(product.quantity > 0) {
                if(opera !== -1){
                    product.quantity += 1
                }else{
                    product.quantity -= 1
                }
            }else{
                product.quantity += 1
            }
            localStorage.setItem('state', JSON.stringify(state))
            return [...state]
        default: return [...state]
    }
    
}
export default addToCart