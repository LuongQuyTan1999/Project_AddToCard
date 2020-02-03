import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './../components/Message'
// import * as actions from '../actions/actions'
import PropTypes from 'prop-types';

class MessageContainer extends Component {
    render() {
        var { message } = this.props
        return (
            <Message message = { message }/>
        );
    }
}

MessageContainer.propTypes = {
    message : PropTypes.string.isRequired
}

const mapStateToProps = (state) => {
    return {
        message : state.messagea
    }
}
// var mapDispatchToProps = (dispatch, action) => {
//     return {
//         addToCart : (product) => {
//             dispatch(actions.addToCart(product,1))
//         }   
//     }
// }
export default connect(mapStateToProps, null)(MessageContainer);
