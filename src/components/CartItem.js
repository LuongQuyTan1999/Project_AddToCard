import React, {Component} from 'react';
import * as message from './../constants/Message'
class CartItem extends Component {
    calender = (price,quantity) =>{
        return price * quantity
    }
    deletedToCart = (id) => {
        this.props.deletedToCart(id)
        this.props.changeMess(message.MSG_DELETED_PRODUCT_IN_CART_SUCCESS)
    }
    updateAmountInProduct = (product,opera) => {
        this.props.updateAmountInProduct(product,opera)
        this.props.changeMess(message.MSG_UPDATE_CART_SUCCESS)
    }
    render() {
        var {item} = this.props
        return (
            <tr>
                <th scope="row">
                    <img src="https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72"
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{item.product.name}</strong>
                    </h5>
                </td>
                <td>{item.product.price}</td>
                <td className="center-on-small-only">
                    <span className="qty">{item.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label 
                            className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick = {() => this.updateAmountInProduct(item,-1)}
                        >
                            <a>—</a>
                        </label>
                        <label 
                            className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            onClick = {() => this.updateAmountInProduct(item,1)}
                        >
                            <a>+</a>
                        </label>
                    </div>
                </td>
                <td>{this.calender(item.product.price, item.quantity)}</td>
                <td>
                    <button 
                        type="button" 
                        className="btn btn-sm btn-primary waves-effect waves-light" 
                        data-toggle="tooltip" 
                        data-placement="top"
                        title="" 
                        data-original-title="Remove item"
                        onClick = {() => this.deletedToCart(item.product.id)}
                    >
                        X
                    </button>
                </td>
            </tr> 
        );
    }
}

export default CartItem;
