import React from 'react';
import logo from '../../images/drink-plus.png';
import './Header.css'

const Header = () => {
    return (
        <div className='container text-center mt-2 header'>
            <img src={logo} alt="" />
            <h1>Enjoy Your Life With Drinks...</h1>
        </div>
    );
};

export default Header;