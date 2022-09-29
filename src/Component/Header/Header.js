import React from 'react';
import './Header.css';
import logo from '../../images/logo.jpg';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
const Header = () => {
    return (
        <div className='header'>
            <div>
                <div className='flexible'>
                    <img src={logo} alt="" />
                    <h1>Fitness Center</h1>
                </div>
                <h1>Select Your Exercise</h1>
                <Main></Main>
            </div>
            <div>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Header;