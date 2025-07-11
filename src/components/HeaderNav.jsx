import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/HeaderNav.css';

const HeaderNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <nav className="nav">
                <div className="nav-brand">
                    <h2>FoodFinder</h2>
                </div>
                
                {/* Hamburger Button */}
                <button 
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Desktop Navigation */}
                <ul className="nav-links desktop-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/game">Game</Link></li>
                </ul>

                {/* Mobile Full-Screen Navigation */}
                <div className={`mobile-nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul className="mobile-nav-links">
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/game" onClick={closeMenu}>Game</Link></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default HeaderNav;
