import React, { useState } from 'react'
import Cart from '../Cart/Cart'
import { Link } from 'react-router-dom'
import LoginModal from '../LoginModal/LoginModal'
import './Header.css'

const Header = () => {

    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
      setShowLogin(true);
    };
  
    const handleCloseModal = () => {
      setShowLogin(false);
    };
  return (
    <nav className="navbar">
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to="/promotions">Promotions</Link></li>
      <li><Link to="/enquire">Enquire</Link></li>
      <li><button onClick={handleLoginClick}>Login</button></li>
      <li><Cart /></li>
    </ul>
    {showLogin && <LoginModal onClose={handleCloseModal} />}
  </nav>
);
};
export default Header