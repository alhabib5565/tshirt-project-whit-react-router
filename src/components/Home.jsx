import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from './cart/cart';
import Tshirt from './tshirt/Tshirt';

const Home = () => {
    let tshirts = useLoaderData()
    let [cart, setCart] = useState([])
    let handleAddToCart = tshirt => {
        let AddCart = [...cart, tshirt]
        setCart(AddCart)
    }
    let removeFormCart = id => {
        let remaining = cart.filter(ts => ts._id !== id)
        setCart(remaining)
    }
    return (
        <div className='shop-container'>
            <div className='tshirts-container'>
                {
                    tshirts.map(tshirt => <Tshirt
                    key={tshirt._id}
                    tshirt={tshirt}
                    handleAddToCart={handleAddToCart}
                    ></Tshirt>)
                }
            </div>
            <div className='order-summary'>
                <Cart cart={cart} removeFormCart={removeFormCart}></Cart>
            </div>

        </div>
    );
};

export default Home;