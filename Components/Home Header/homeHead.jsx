import { useEffect, useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import '../Header/header.css';
import menu from '../../assets/menu.png';
import logo from '../../assets/logo.png';

function HomeHeader() {
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
                    <li><ScrollLink to="homeSlider" smooth={true} offset={0} duration={500}>Home</ScrollLink></li>
                    <li><RouterLink to="/machineDetails" offset={-260} duration={500}>Machines</RouterLink></li>
                    <li><RouterLink to="/master" offset={-260} duration={500}>Masters</RouterLink></li>
                    <li><ScrollLink to="testi" smooth={true} offset={-260} duration={500}>Testimonials</ScrollLink></li>
                    <li><RouterLink to="/contactForm" offset={-260} duration={500}>Contact us</RouterLink></li>
                </ul>
                <img src={menu} alt="Menu Icon" className="menu-icon" onClick={toggleMenu} />
            </nav>
        </div>
    );
}

export default HomeHeader;
