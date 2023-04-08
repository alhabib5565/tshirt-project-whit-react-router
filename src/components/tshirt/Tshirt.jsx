import React from 'react';
import './tshit.css'
const Tshirt = ({tshirt, handleAddToCart}) => {
    let {picture, name, _id, price} = tshirt
    console.log(tshirt)
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h4>{name}</h4>
            <p>Price: {price}</p>
            <button onClick={()=>handleAddToCart(tshirt)}>Buy Now</button>
        </div>
    );
};

export default Tshirt;