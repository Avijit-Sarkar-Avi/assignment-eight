import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { age, details, time, name, image } = props.item
    return (
        <div className='cart'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>{details}</p>
            <h5>For Age: {age}</h5>
            <h5>Time required: {time}s</h5>
        </div>
    );
};

export default Cart;