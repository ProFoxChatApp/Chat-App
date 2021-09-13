import React from 'react'
import './Login.css'
import {useNavigate} from '@reach/router'

function Login() {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("User authentication is not yet implemented. This is will just redirect you to the main app")
        navigate('/', { replace: false })
    }

    return (
        <div className="loginContainer">
            <div className="loginBox">
                <div className="logo">

                </div>
                <form onSubmit={handleSubmit} className="loginForm">
                    <input type="email" placeholder="email" required/>
                    <input type="password" placeholder="password" required/><br/>
                    
                    <button type="submit"className="submitButton">Login</button>
                    
                    <a href="#" className="signupBtn">Sign up</a>
                </form>
            </div>
        </div>
    )
}

export default Login
