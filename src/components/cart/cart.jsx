import React from 'react';
import './cart.css'
const Cart = ({cart, removeFormCart}) => {
    let msg;
    if(cart.length < 2){
       msg = <p className='p'>fokira</p>
    }else{
        msg = <p>voroLoks</p>
    }
    return (
        <div>
            {msg}
            <h1>Order summary: {cart.length}</h1>
            {
                cart.length > 4 ? <p className={cart.length === 4 ? 'r': 'y'}>4 plus item added</p> : <p>added item less then of 4</p>
            }
            {
                cart.map(ts => <p key={ts._id}>{ts.name} <button onClick={()=> removeFormCart(ts._id)}>X</button></p>)
            }
            {
                cart.length === 2 && <p>just tow items added</p>
            }
            {
                cart.length === 3 || <p>added items not equal 3 </p>
            }
        </div>
    );
};

export default Cart;