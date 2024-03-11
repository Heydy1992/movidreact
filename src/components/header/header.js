import React from 'react';
import './header.css';
import Menu from '../menu/menu';
import Button from '../buttons/button';
import logo from '../../resources/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneFlip } from '@fortawesome/free-solid-svg-icons';

const Header = () =>{
    const handleClick = () => {
        alert("Gracias por reservar!");
    }

    return (
        
        <div>
            <div className="bar-info">
                <h4>¡Oferta especial! ¡Reserva ahora y ahorra un 20% en tu próximo vuelo!</h4>
            </div>
               
            
            <header className="header">
                <div className="logo">
                    <img src={logo} alt="Logo de MoVid" />
                </div>
           
                <Menu />
                <Button onClick={handleClick} type="button" className="primary-button reservar-button">
                    <FontAwesomeIcon icon={faPhoneFlip} /> Reserva 
                </Button>    
            </header>
        </div>
        
    )
}

export default Header;