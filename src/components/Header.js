import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

function Header({ title }) {
    return (
        <header className="header">
            <h1>{title}</h1>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Header;

// File: components/Header.js
// Description: This component displays the header of the application. It takes a 'title' prop to set the text of the header.
// Usage: Import this component and pass a 'title' prop to display a custom header title.
