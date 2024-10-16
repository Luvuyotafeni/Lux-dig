import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Header.css';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null); // State to track logged-in user

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

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignIn(true); // Opens login form
  };

  const handleCloseModal = () => {
    setShowLogin(false);
    setShowSignIn(false);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  };

  const handleCloseSignUp = () => {
    setShowSignUp(false);
    setShowSignIn(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Retrieve the cart from the local storage
    const localCart = JSON.parse(localStorage.getItem('cart')) || [];

    // Collect the user information to send as data
    const data = {
      name,
      surname,
      phone,
      email,
      password,
      cart: localCart
    };

    axios.post('http://localhost:3001/users', data)
      .then((result) => {
        console.log(result);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  const logInSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', { email: loginEmail, password: loginPassword })
      .then((response) => {
        console.log('Login successful', response);

        if (response.data.message === "Login successful") {
          const userData = response.data.user;

          // Save user data to localStorage and set it to state
          localStorage.setItem('user', JSON.stringify(userData));
          setLoggedInUser(userData);

          // Close the login modal
          setShowLogin(false);
          setShowSignIn(false);
          navigate('/');
        }
      })
      .catch((error) => {
        console.error('Login failed', error);
      });
  };

  const handleLogout = () => {
    // Clear user data from localStorage and state
    localStorage.removeItem('user');
    setLoggedInUser(null);
    navigate('/');
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

        {/* Check if user is logged in */}
        {loggedInUser ? (
          <>
            <li>Welcome, {loggedInUser.name}</li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <li><button onClick={handleLoginClick}>Login</button></li>
        )}
      </ul>

      {/* Login/Signup Modal */}
      {showLogin && (
        <>
          {showSignIn && (
            <div className="modal fade show" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Log In</h5>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={logInSubmit}>
                      <div className="form-group">
                        <label>Email address</label>
                        <input type="email" className="form-control" placeholder="e.g lux@gmail.com" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label>Enter Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} />
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

          {showSignUp && (
            <div className="modal fade show" role="dialog" style={{ display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Sign Up</h5>
                    <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseSignUp}></button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label>Surname</label>
                        <input type="text" className="form-control" placeholder="Enter surname" onChange={(e) => setSurname(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label>Phone</label>
                        <input type="text" className="form-control" placeholder="Enter phone" onChange={(e) => setPhone(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label>Create Password</label>
                        <input type="password" className="form-control" placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </nav>
  );
};

export default Header;
