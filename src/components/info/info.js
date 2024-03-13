import React from 'react';
import './info.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign, faFilter, faPeopleArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';

const Info = () => {
    return(
        <aside class="related-content">
                
            <ul>
                <li class="menu-op2"> <FontAwesomeIcon icon={faDollarSign} />  Vuelos disponibles</li>
                <li class="menu-op2"> <FontAwesomeIcon icon={faPeopleArrowsLeftRight} />  Opciones de vuelo</li>
                <li class="menu-op2"> <FontAwesomeIcon icon={faFilter} />  Filtros</li>

            </ul>
    </aside> 

    );
}

export default Info;