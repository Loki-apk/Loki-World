import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import menu from '../../assets/menu.png';
import logo from '../../assets/logo.png';

function Header() {
    const [sticky, setSticky] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [showHead, setShowHead] = useState(true);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (window.scrollY > lastScrollY && window.scrollY > 50) {
                setShowHead(false);
            } else {
                setShowHead(true);
            }
            lastScrollY = window.scrollY;
            setSticky(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    };

    return (
        <div>
            <div className={`head ${sticky ? 'scrolls' : ''} ${showHead ? '' : 'hide-head'}`}>
                <ul>
                    <li>Phone: +91 8939379842</li>
                    <li>Email: kediagk07@gmail.com</li>
                </ul>
            </div>
            <nav className={`${!showHead ? 'sticky-nav' : ''}`}>
                <img src={logo} alt="logo" className="logo" />
                <ul className={mobileMenu ? 'show-mobile-menu' : ''}>
                    <li><Link to="/" smooth={true}>Home</Link></li>
                    <li><Link to="/machineDetails" smooth={true}>Machines</Link></li>
                    <li><Link to="/master" smooth={true}>Masters</Link></li>
                    <li><Link to="/contactForm" smooth={true}>Contact us</Link></li>
                </ul>
                <img src={menu} alt="Menu Icon" className="menu-icon" onClick={toggleMenu} />
            </nav>
        </div>
    );
}

export default Header;
