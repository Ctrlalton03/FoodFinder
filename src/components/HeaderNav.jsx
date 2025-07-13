import '../Css/HeaderNav.css';
import {useState} from 'react';
import { Link } from 'react-router-dom';



const HeaderNav = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () =>{
        setIsMenuOpen(!isMenuOpen);

    }

    const closeMenu = () => {
        setIsMenuOpen(false);
    }

    //This Component above renders the header by setting the useState of the menu to 
    //true or false when the menu is toggled. which allows for a responsive design
    //that can be used on mobile devices. The menu is toggled by clicking on the hamburger icon.
    //The menu items are links to the home and game pages.


    return (
        <header className='header'>
            <nav className='nav'>
                <div className='nav-brand'>
                    <h2>FF.</h2>
                </div>
                {/*Hamburger Menu button */}
                <button 
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle navigation menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                {/*Desktop Navigation */}
                <ul className='nav-links desktop-nav'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/game">Game</Link></li>
                </ul>
                {/*Mobile FullScreen*/}
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
