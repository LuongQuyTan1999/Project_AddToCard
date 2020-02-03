import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart'
import CartItem from './../components/CartItem'
import CartResult from './../components/CartResult'
import * as message from './../constants/Message'
import * as actions from './../actions/actions'

class CartContainer extends Component {
    showTotalAmount = (cart) => {
        var result = null;
        if(cart.length > 0){
            result = <CartResult cart = {cart}/>
        }
        return result
    }
    showCart(cart){
        var {deletedToCart, changeMess, updateAmountInProduct} = this.props
        var result = <tr><td>{message.MSG_CART_EMPTY}</td></tr>;
        if(cart.length > 0){
            result = cart.map( (item, index) => {
                return <CartItem 
                    key = {index} 
                    item = {item} 
                    index = {index}
                    deletedToCart = {deletedToCart}
                    changeMess = {changeMess}
                    updateAmountInProduct = {updateAmountInProduct}
                />
            });
        }
        return result
    }
    
    render() {
        var { cart } = this.props
        return (
            <Cart>
                { this.showCart(cart) }
                { this.showTotalAmount(cart) }
            </Cart>
        );
    }
}

CartContainer.propTypes = {
    cart : PropTypes.arrayOf(PropTypes.shape({
        product : PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired
        }).isRequired,
        quantity : PropTypes.number.isRequired
    })).isRequired,
    deletedToCart : PropTypes.func.isRequired,
    changeMess : PropTypes.func.isRequired,
    updateAmountInProduct : PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        cart : state.cart
    }
}
const mapDispatchToProps = (dispatch, action) => {
    return {
        deletedToCart : (id) => {
            dispatch(actions.deletedToCart(id))
        },
        changeMess : (message) => {
            dispatch(actions.message(message))
        },
        updateAmountInProduct : (product,opera) => {
            dispatch(actions.updateAmountInProduct(product,opera))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
