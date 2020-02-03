import * as types from './../constants/ActionType'
export const addToCart = (product, quantity) => {
    return {
        type : types.ADD_TO_CART,
        product,
        quantity
    }
}

export const message = (message) => {
    return {
        type : types.CHANGE_MESSAGE,
        message
    }
}

export const deletedToCart = (id) => {
    return {
        type : types.DELETED_TO_CART,
        id
    }
}
export const updateAmountInProduct = (product,opera) => {
    return {
        type : types.UPDATE_AMOUNT_IN_PRODUCT,
        product,
        opera
    }
}