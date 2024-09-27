import React, {useState} from 'react'
import './LoginModal.css'

const LoginModal = () => {
  const [showSignUp, setShowSignUp] = useState(false);
 
  

  const handleSignUpClick = () => {
    setShowSignUp(true);
  }

  const handleCloseSignUp = () => {
    setShowSignUp(false);
  }

  return (
    <>
      {/* LoginModal */}
      <div className='modal fade show' role='dialog' style={{display:'block', backgroundColor: 'rgba9(0, 0, 0, 0.5)'}}>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Log In</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>           
            </div>
            <div className='modal-body'>
              <form>
                <div className='form-group'>
                  <label htmlfor='email'>Email address</label>
                  <input type='email' className='form-control' id='email' placeholder='e.g lux@gmail.com'></input>
                </div>
                <div className='form-group'>
                  <label htmlFor='password'>Enter Password</label>
                  <input type='password' className='password' id='password' placeholder='Enter password'/>
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
                <form>
                  <div className='form-group'>
                    <label>Name</label>
                    <input type='text' className='form-control' id='signupEmail' placeholder='enter email'/>
                  </div>
                  <div className='form-group'>
                    <label>Surname</label>
                    <input type='text' className='form-control' id='signupEmail' placeholder='enter email'/>
                  </div>
                  <div className='form-group'>
                    <label>Phone</label>
                    <input type='text' className='form-control' id='signupEmail' placeholder='enter email'/>
                  </div>
                  <div className='form-group'>
                    <label>Email</label>
                    <input type='text' className='form-control' id='signupEmail' placeholder='enter email'/>
                  </div>
                  <div className='form-group'>
                    <label>Confirm Email</label>
                    <input type='text' className='form-control' id='signupEmail' placeholder='enter email'/>
                  </div>
                  <div className='form-group'>
                    <label>Create password</label>
                    <input type='text' className='form-control' id='signupEmail' placeholder='enter email'/>
                  </div>
                  <div className='form-group'>
                    <label>Re-type password</label>
                    <input type='text' className='form-control' id='signupEmail' placeholder='enter email'/>
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