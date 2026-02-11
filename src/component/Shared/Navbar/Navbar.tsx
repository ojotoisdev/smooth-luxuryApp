import './Navbar.css';
import logo from '../../../assets/images/logo.png';
import Bookmark from '../../../assets/icons/Bookmark.png';
import { Link } from 'react-router-dom';
import ContactUs from "../../Modals/ContactUs/ContactUs";
import { useState } from "react";
import Button from '../../Button/Button';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="Navbar">
        <div className="sub-nav">
          {/* Logo */}
          <Link to="/" className="logo-item">
            <img className="logo" src={logo} alt="Site Logo" />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="nav-links desktop-nav">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/eligible-test">Eligible Test</Link></li>
            <li><Link to="/services">Our Services</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>

          {/* Right side (Desktop) */}
          <div className="right-side desktop-nav">
            <div className="notice-bar">
              <img src={Bookmark} alt="Notification" />
              <span className="dot" />
            </div>

            <Button
              variant="BUTTON"
              onClick={() => setShowModal(true)}
            >
              Contact Us
            </Button>
          </div>

          {/* Hamburger for Mobile */}
          <div className="hamburger mobile-nav" onClick={() => setMenuOpen(!menuOpen)}>
            <span />
            <span />
            <span />
          </div>

          {/* Mobile Drawer */}
          <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About Us</Link></li>
            <li><Link to="/eligible-test" onClick={closeMenu}>Eligible Test</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Our Services</Link></li>
            <li><Link to="/faqs" onClick={closeMenu}>FAQs</Link></li>

            <Button
              variant="BUTTON"
              onClick={() => {
                setShowModal(true);
                closeMenu();
              }}
            >
              Contact Us
            </Button>
          </ul>
        </div>
      </nav>

      {/* Contact Modal */}
      <ContactUs
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Navbar;
