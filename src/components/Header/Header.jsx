import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Header.css'; // Make sure to create this CSS file for styling

const Header = () => {
  const [modalType, setModalType] = useState(null); // State to track which modal is open
  const [loggedInUser, setLoggedInUser] = useState(null); // State to track logged-in user
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to toggle dropdown

  const navigate = useNavigate();

  // Login States
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // Sign Up States
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Check if the user is already logged in when the component mounts
  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (userData) {
      setLoggedInUser(userData);
    }
  }, []);

  const handleModalClose = () => {
    setModalType(null);
  };

  const handleSignUpClick = () => {
    setModalType('signup');
  };

  const handleLoginClick = () => {
    setModalType('login');
  };

  const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const localCart = JSON.parse(localStorage.getItem('cart')) || [];

    const data = { name, surname, phone, email, password, cart: localCart };

    try {
      const result = await axios.post('http://localhost:3001/users', data);
      console.log(result);
      localStorage.removeItem('cart');
      navigate('/');
    } catch (err) {
      console.error(err);
    }
  };

  const logInSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/login', {
        email: loginEmail,
        password: loginPassword,
      });
      console.log('Login successful', response);
      if (response.data.message === "Login successful") {
        const userData = response.data.user;
        localStorage.setItem('user', JSON.stringify(userData));
        setLoggedInUser(userData);
        localStorage.setItem('cart', JSON.stringify(userData.cart || []));
        handleModalClose();
        navigate('/');
      }
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const handleLogout = async () => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
  
    if (loggedInUser && loggedInUser._id) {
      try {
        // Send the updated cart to the server
        await axios.put(`http://localhost:3001/cart/${loggedInUser._id}`, { cart: currentCart });
        console.log('Cart successfully submitted on logout');
      } catch (error) {
        console.error('Error submitting cart on logout:', error);
      } finally {
        // Clear local storage and logout user
        localStorage.removeItem('user');
        localStorage.removeItem('cart');
        setLoggedInUser(null);
        navigate('/');
      }
    } else {
      // If user data is missing, just clear the local storage and logout
      localStorage.removeItem('user');
      localStorage.removeItem('cart');
      setLoggedInUser(null);
      navigate('/');
    }
  };
  
  

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/promotions">Promotions</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/enquire">Enquire</Link></li>

        {loggedInUser ? (
          <li className="dropdown" onClick={handleDropdownToggle}>
            Welcome, {loggedInUser.name}
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li><Link to="/orders">Orders</Link></li>
                <li><Link to="/personal-details">Personal Details</Link></li>
                <li><Link to="/settings">Settings</Link></li>
                <li><button onClick={handleLogout}>Logout</button></li>
              </ul>
            )}
          </li>
        ) : (
          <li><button onClick={handleLoginClick}>Login</button></li>
        )}
      </ul>

      {/* Login Modal */}
      {modalType === 'login' && (
        <div className="modal fade show" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Log In</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleModalClose}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={logInSubmit}>
                  <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="e.g. lux@gmail.com" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label>Enter Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Log In</button>
                </form>
              </div>
              <div className="modal-footer">
                <p className="text-center">
                  Don't have an account? <button type="button" className="btn btn-link" onClick={handleSignUpClick}>Sign Up</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Sign Up Modal */}
      {modalType === 'signup' && (
        <div className="modal fade show" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Sign Up</h5>
                <button type="button" className="btn-close" aria-label="Close" onClick={handleModalClose}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" placeholder="Enter name" onChange={(e) => setName(e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label>Surname</label>
                    <input type="text" className="form-control" placeholder="Enter surname" onChange={(e) => setSurname(e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="text" className="form-control" placeholder="Enter phone" onChange={(e) => setPhone(e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} required />
                  </div>
                  <div className="form-group">
                    <label>Create Password</label>
                    <input type="password" className="form-control" placeholder="Create password" onChange={(e) => setPassword(e.target.value)} required />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
