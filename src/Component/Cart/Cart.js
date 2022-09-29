import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { age, details, time, name, image } = props.item
    return (
        <div className='cart'>
            <img src={image} alt="" />
            <h3>{name}</h3>
            <p>{details}</p>
            <h4>For Age: {age}</h4>
            <h4>Time required: {time}s</h4>
            <button className='btn-cart'>
                Add To Cart
            </button>
        </div>
    );
};

export default Cart;