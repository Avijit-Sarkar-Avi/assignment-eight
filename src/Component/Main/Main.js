import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import './Main.css'
const Main = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('fakedb.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    console.log(items)
    return (
        <div className='main'>
            {
                items.map(item => <Cart
                    key={item.id}
                    item={item}
                ></Cart>)
            }
        </div>
    );
};

export default Main;