import React from 'react'
import { Link } from 'react-router-dom'
import login from '../../assets/images/login.jpg'
import '../../App.css'

export default function SignInPage() {
    return (
        <div className="text-center m-5-auto">
            <img src = {login}/>
            <h2>Sign in to us</h2>
            <form action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="first_name" required />
                </p>
                <p>
                    <label>Password</label>
                    <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                    <br/>
                    <input type="password" name="password" required />
                </p>

                <p>
                <label>
                    <span><input type="checkbox"/>Keep me logged in</span>
                </label>
                </p>
                
                <p>
                <label>
                    <span><input style={{width:"0 rem"}} type="checkbox"/>Accept Cookies</span>
                </label>
                </p>

                <p>
                <label>
                    <span><input style={{width:"0 rem"}} type="checkbox"/>Save Password?</span>
                </label>
                </p>

               

                
                
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
