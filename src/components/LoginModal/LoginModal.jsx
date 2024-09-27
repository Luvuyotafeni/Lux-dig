import React from 'react'
import './LoginModal.css'

const LoginModal = () => {
  return (
    <>
      {/* LoginModal */}
      <div className='modal fade show' role='dialog' style={{display:'block', backgroundColor: 'rgba9(0, 0, 0, 0.5)'}}>
        <div className='modal-dialog modal-dialog-centered'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h5 className='modal-title'>Log In</h5>
              <button type='button' className='close' aria-label='close'>
                <span aria-hidden='true'>&times;</span>
              </button>            
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
                Don't have an account?<button type='button' className='btn btn-link'></button>
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </>
  )
}

export default LoginModal