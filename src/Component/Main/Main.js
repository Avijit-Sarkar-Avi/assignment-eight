import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import './Main.css'
const Main = () => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    console.log([...cart])
    const handleAddToCart = (items) => {
        setCart([...cart, items])
    }

    return (
        <div className='header'>
            <div>
                <Navbar></Navbar>
                <div className='main'>
                    {
                        items.map(item => <Cart
                            key={item.id}
                            item={item}
                            handleAddToCart={handleAddToCart}
                        ></Cart>)
                    }
                </div>
            </div>
            <div>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Main;