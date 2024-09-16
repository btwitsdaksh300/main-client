import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import CSS for styling

const Navbar = ({ onLogout }) => {
    return (
        <nav className="navbar">
            <ul className="navbar-menu">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/faq">FAQ</Link></li>
                <li><Link to="/chatbot">Chatbot</Link></li>
                <li><Link to="/translator">Translator</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><button onClick={onLogout}>Logout</button></li>
            </ul>
        </nav>
    );
};

export default Navbar;
