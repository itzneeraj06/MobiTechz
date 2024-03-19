import React from 'react'
import './CSS/login.css'
import { useNavigate } from 'react-router'
const Signup = ({setLogin}) => {
    const navigate=useNavigate();
    function submithandle(event){
        alert("Registration Successful Do you want Login ?")
        navigate("/");
        setLogin(true)

    }
    return (

        <div className="l1">
            <div className="l2">
                <h3>Sign Up</h3>
                <form className='l3' onSubmit={()=>submithandle()}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"  required/>
                    <br />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email"  required/>
                    <br />

                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone"  required/>
                    <br />

                    <label htmlFor="dob">Date of Birth:</label>
                    <input type="date" id="dob" name="dob"  />
                    <br />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password"  required/>
                    <br />


                    <label htmlFor="confirm-password">Confirm Password:</label>
                    <input type="password" id="confirm-password" name="confirm-password"  required/>
                    <br />
                    <button className='Rn'>Register Now</button>
                </form></div>
        </div>
    )
}

export default Signup