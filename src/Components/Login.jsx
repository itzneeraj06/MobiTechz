import React from 'react';
import './CSS/login.css';
import { Link, useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = ({ login, setLogin }) => {
  const navigate = useNavigate();

  const submithandle = (e) => {
    e.preventDefault();
    setLogin(true);
    console.log(login);
    navigate("/");
    toast.success("Login Successful");

  }

  return (
    <div className='l1'>
      <div className="l2">
        <h3>Welcome Back</h3>
        <form className='l3' onSubmit={submithandle}>
          <label>Email Address</label>
          <input type="email" name="email" placeholder='enter dummy data to login ex.a@a' required/><br />
          <label >Password</label>
          <input type="password" name='password' placeholder='enter dummy password ex.abcd' required/>

          <button>Login </button>
        </form>
        <div className='l4'></div>
        <div className='l5'>
          <p id='or'>or</p>
          <Link to='/Signup'><p>create an <span>Account</span>?</p></Link>
        </div>
      </div>

    </div>
  )
}

export default Login