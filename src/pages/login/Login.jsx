import './login.css'
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>

            <form className="loginForm">
                <label >Email</label>
                <input className='loginInput' type="text" name="" id="" placeholder='Enter your email...' />
                <label >Password</label>
                <input className='loginInput' type="password" name="" id="" placeholder='Enter your password...' />
                <button className="loginButton">
                    Login
                </button>
                <button className="registerLoginButton">
                    <li className='topListItem'><Link className='link' to="/login">REGISTER</Link></li>
                </button>

            </form>
        </div>
    )
}
