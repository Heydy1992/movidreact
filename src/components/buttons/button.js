import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

const Button = ({onClick, children, type, className}) => {
    return (
        <button onClick={onClick} type={type} className={className}>
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick:PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className:PropTypes.string
}

Button.defaultProps={
    type:'button',
    className:''
};

export default Button;