import React from 'react';
import './header.css';
import Menu from '../menu/menu';
import logo from '../../resources/logo.png'

const Header = () =>{
    return (
        <header className="header">
            <div class="logo">
                <img src={logo} alt="Logo de MoVid" />
            </div>
           
            <Menu />
        </header>
    )
}

export default Header;