import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Navbar from '../Navbar/Navbar';
import Qa from '../QuastionAnswer/Qa';
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

    const handleAddToCart = (item) => {
        setCart([...cart, item])
    }

    return (
        <div>
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
                    <Sidebar cart={cart}></Sidebar>
                </div>
            </div>
            <Qa></Qa>
        </div>
    );
};

export default Main;