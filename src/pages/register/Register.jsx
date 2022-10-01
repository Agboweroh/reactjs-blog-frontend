import './register.css'
import { Link } from 'react-router-dom';

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>

            <form className="registerForm">
                <label >Username</label>
                <input className='registerInput' type="text" name="" id="" placeholder='Enter your username...' />

                <label >Email</label>
                <input className='registerInput' type="text" name="" id="" placeholder='Enter your email...' />

                <label >Password</label>
                <input className='registerInput' type="password" name="" id="" placeholder='Enter your password...' />
                <button className="registerButton">
                    Register
                </button>
                <button className="registerLoginButton">
                    <li className='topListItem'><Link className='link' to="/login">LOGIN</Link></li>
                </button>

            </form>
        </div>
    )
}
