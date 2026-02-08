import './Navbar.css';
import logo from '../../../assets/images/logo.png';
import Bookmark from '../../../assets/icons/Bookmark.png';
import { Link } from 'react-router-dom';
import ContactUs from "../../Modals/ContactUs/ContactUs";
import { useState } from "react";
import Button from '../../Button/Button';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="Navbar">
        {/* Left: Logo + Links */}
        <ul className="nav-links">
          <li className="logo-item">
            <img className="logo" src={logo} alt="Site Logo" />
          </li>

          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/eligible-test">Eligible Test</Link></li>
          <li><Link to="/services">Our Services</Link></li>
          <li><Link to="/faqs">FAQs</Link></li>

          {/* Right side (desktop) */}
          <li className="right-side nav-col desktop-nav">
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
          </li>
        </ul>

        {/* Right side (mobile) */}
        <div className="right-side mobile-nav">
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
      </nav>

      <ContactUs
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default Navbar;
