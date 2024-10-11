import React, {useState} from 'react'
import './LoginModal.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom' 

const LoginModal = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const navigate = useNavigate()

  const [loginEmail, setLoginEmail] = useState()
  const [LoginPassword, setLoginPassword] = useState()
 
  const [name, setName] = useState()
  const [surname, setSurname] = useState()
  const [phone, setPhone]= useState()
  const [email, setEmail] = useState()    
  const [password, setPassword] = useState()
  
  const handleCloseSignIn = () => {
    setShowSignIn(false);
  }
  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowSignIn(false);
  }

  const handleCloseSignUp = () => {
    setShowSignUp(false);
    setShowSignIn(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/users', {name, surname, phone, email, password})
    .then((result) => { console.log(result)
      navigate('/')
    })
    .catch(err => console.log(err))
  }

  const logInSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/login', {email:loginEmail , password:LoginPassword})
    .then((response) => {
      console.log('log in sucessful', response);
      if(response.data === "Success"){
        navigate('/');
      }
    })
    .catch((error) => {
      console.error('log in failed', error);
    })
  }

  return (
    <>
      {/* LoginModal */}
      <div className='modal fade show' role='dialog' style={{display:'block', backgroundColor: 'rgba9(0, 0, 0, 0.5)'}}>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Log In</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseSignIn}></button>           
            </div>
            <div className='modal-body'>
              <form onSubmit={logInSubmit}>
                <div className='form-group'>
                  <label htmlfor='loginEmail'>Email address</label>
                  <input type='email' className='form-control' id='email' placeholder='e.g lux@gmail.com' value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)}></input>
                </div>
                <div className='form-group'>
                  <label htmlFor='loginPassword'>Enter Password</label>
                  <input type='password' className='form-control' id='password' placeholder='Enter password' value={LoginPassword} onChange={(e) => setLoginPassword(e.target.value)}/>
                </div>
                <button type='submit' className='btn btn-primary btn-block'>Log In</button>
              </form>
            </div>
            <div className='modal-footer'>
              <p className='text-center'>
                Don't have an account?<button type='button' className='btn btn-link' onClick={handleSignUpClick}>SignUp</button>
              </p>
            </div>
          </div>     
        </div>
      </div>
      {/* Sign up modal decided to conditionally render it */}
      {showSignUp &&(
        <div className='modal fade show' role='dialog' style={{display: 'block', backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
          <div className='modal-dialog modal-dialog-centered'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h5 className='modal-title'>Sign Up</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseSignUp}></button>
              </div>
              <div className='modal-body'>
                <form onSubmit={handleSubmit}>
                  <div className='form-group'>
                    <label>Name</label>
                    <input type='text' className='form-control' id='signupEmail' placeholder='enter name'
                    onChange={(e) => setName(e.target.value)}/>
                  </div>
                  <div className='form-group'>
                    <label>Surname</label>
                    <input type='text' className='form-control' id='signupEmail' placeholder='enter surname'
                    onChange={(e) => setSurname(e.target.value)}/>
                  </div>
                  <div className='form-group'>
                    <label>Phone</label>
                    <input type='text' className='form-control' id='signupEmail' placeholder='enter phone'
                    onChange={(e) => setPhone(e.target.value)}/>
                  </div>
                  <div className='form-group'>
                    <label>Email</label>
                    <input type='email' className='form-control' id='signupEmail' placeholder='enter email'
                    onChange={(e) => setEmail(e.target.value)}/>
                  </div>
                  <div className='form-group'>
                    <label>Confirm Email</label>
                    <input type='email' className='form-control' id='signupEmail' placeholder='confirm email'/>
                  </div>
                  <div className='form-group'>
                    <label>Create password</label>
                    <input type='password' className='form-control' id='signupEmail' placeholder='enter password'
                    onChange={(e) => setPassword(e.target.value)}/>
                  </div>
                  <div className='form-group'>
                    <label>Re-type password</label>
                    <input type='password' className='form-control' id='signupEmail' placeholder='confirm password'/>
                  </div>
                  <button type='submit' className='btn btn-primary btn-block'>Sign Up </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LoginModal