import React from 'react';
import './Cart.css';

const Cart = ({cart}) => { //option: 03
    // const cart = props.cart; // option: 01
    // const {cart} = props; //option: 02

    console.log(cart);
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    
    return (
        <div className='cart'>
            <h3>Products summary</h3>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: {total}</p>
            <p>Total Shipping: {}</p>
            <p>Tax: {}</p>
            <h6>Grand Total: {}</h6>
        </div>
    );
};

export default Cart;