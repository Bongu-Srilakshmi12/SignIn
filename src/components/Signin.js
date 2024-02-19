import React from 'react';
import '../styles/Signin.css';
import GoogleIcon from '@mui/icons-material/Google';
import { Facebook } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';

export function SignIn() {
  return (
    <div className='container-fluid d-flex justify-content-center align-items-center' id="signIn">
      <form className='w-25 p-4'>
        <h4 className='text-left mb-2'>Sign In</h4>
        <div>
            <input type='email' placeholder='Enter Email ID/Username*'className='form-control mb-4'/>
        </div>
        <div>
            <input type='password' placeholder='Enter Password*' className='form-control mb-4'/>
        </div>
        <div className='d-flex justify-content-evenly'>
            <input type='checkbox' className='form-check-input me-1'/><span>Remember me</span><span className='ms-4 text-primary'><u>Forgot password</u></span>
        </div>
        <button className='btn btn-primary w-100 mt-3 mb-2'>Log In</button>

        <p>Or</p>
        <div>
            <span><GoogleIcon/></span>
            <span className='me-3 mt-3'>Google</span>
            <span><Facebook/></span>
            <span className='me-3'>Facebook</span>
            <span ><XIcon/></span>
            <span className='me-3'>Twitter</span>
        </div>
      </form>
    </div>
  )
}
