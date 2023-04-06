import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/product';
import product from '../Product/product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    useEffect( () => {
        const storeCart = getShoppingCart();
        const savedCart = [];
        //Step: 01 - get id of the addProduct
        for(const id in storeCart){
            // Step: 02- get the product by products state by using id
            const addedProduct = products.find(product => product.id === id);
            if(addedProduct){
                // Step: 03- add product 
                const quantity = storeCart[id];
                addedProduct.quantity = quantity;
                // Step: 04- add the added product to the saved cart
                savedCart.push(addedProduct);
            }
            // Step: 05- set the cart
            setCart(savedCart);
            // console.log(addedProduct);
        }
    }, [products])

    const handleAddToCart = (product) => {
        const newCart =[...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }

    const handleClearCar = ()=>{
        setCart([]);
        deleteShoppingCart();
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                    key = {product.id}
                    product = {product}
                    handleAddToCart = {handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                    cart={cart}
                    handleClearCar={handleClearCar}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;