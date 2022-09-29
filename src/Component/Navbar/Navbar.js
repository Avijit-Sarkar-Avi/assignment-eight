import React from 'react';
import './Navbar.css'
import logo from '../../images/logo.jpg';
const Navbar = () => {
    return (
        <div>
            <div className='flexible'>
                <img src={logo} alt="" />
                <h1>Fitness Center</h1>
            </div>
            <h1>Select Your Exercise</h1>
        </div>
    );
};

export default Navbar;