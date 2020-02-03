import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Products from './../components/Products'
import Product from './../components/Product';
import * as actions from './../actions/actions'

class ProductsContainer extends Component {
    showProducts(products){
        var result = null;
        var {addToCart,changeMess} = this.props
        if(products.length > 0){
            result = products.map( (product, index) => {
                return <Product 
                            key = {index} 
                            product = {product}
                            addToCart = {addToCart}
                            changeMess = {changeMess}
                        />
            });
        }
        return result
    }
    render() {
        var { products } = this.props
        return (
            <Products>
                { this.showProducts(products) }
            </Products>
        );
    }
}

ProductsContainer.propTypes = {
    products : PropTypes.arrayOf(
        PropTypes.shape({
            id : PropTypes.number.isRequired,
            name : PropTypes.string.isRequired,
            image : PropTypes.string.isRequired,
            description : PropTypes.string.isRequired,
            price : PropTypes.number.isRequired,
            inventory : PropTypes.number.isRequired,
            rating : PropTypes.number.isRequired

        })
    ).isRequired,
    changeMess : PropTypes.func.isRequired,
    addToCart : PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        products : state.products
    }
}
var mapDispatchToProps = (dispatch, action) => {
    return {
        addToCart : (product) => {
            dispatch(actions.addToCart(product,1))
        },
        changeMess : (message) => {
            dispatch(actions.message(message))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
