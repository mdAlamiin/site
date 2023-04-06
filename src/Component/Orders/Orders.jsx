import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Orders.css';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData()
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) =>{
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    } 

    const handleClearCar = ()=>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className='orders-container'>
            
            {
                cart.map(product => <ReviewItem
                key={product.id}
                product = {product}
                handleRemoveFromCart = {handleRemoveFromCart}
                ></ReviewItem>)
            }
            </div>
            <div className='cart-container'>
                <Cart 
                    cart={cart}
                    handleClearCar={handleClearCar}
                >
                    <Link className='proceed-link' to='/checkout'>
                    <button className='btn-proceed'>
                        Proceed Checkout
                    <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;