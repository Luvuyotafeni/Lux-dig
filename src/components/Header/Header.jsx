import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Header.css';

const Header = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

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
    axios.post('http://localhost:3001/users', { name, surname, phone, email, password })
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
        if (response.data === 'Success') {
          navigate('/');
        }
      })
      .catch((error) => {
        console.error('Login failed', error);
      });
  };

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/promotions">Promotions</Link></li>        
        <li><Link to="/cart">cart</Link></li>
        <li><Link to="/enquire">Enquire</Link></li>
        <li><button onClick={handleLoginClick}>Login</button></li>
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
                      Don't have an account?<button type="button" className="btn btn-link" onClick={handleSignUpClick}>Sign Up</button>
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
