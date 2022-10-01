import './topbar.css';
import { Link } from 'react-router-dom';
export default function TopBar() {
    const user = false;
    return (
        <div className='topbar'>
            <div className="topLeft">
                <i className="topIcon fa-brands fa-square-facebook"></i>
                <i className="topIcon  fa-brands fa-square-twitter"></i>
                <i className="topIcon  fa-brands fa-square-pinterest"></i>
                <i className="topIcon  fa-brands fa-square-instagram"></i>
            </div>

            <div className="topCenter">
                <ul className='topList'>

                    <li className='topListItem'>

                        <Link className='link' to="/" >HOME</Link>
                    </li>
                    <li className='topListItem'><Link className='link' to="/">ABOUT</Link></li>
                    <li className='topListItem'><Link className='link' to="/">CONTACT</Link></li>
                    <li className='topListItem'><Link className='link' to="/write">WRITE</Link></li>
                    <li className='topListItem'>

                        {user && "LOGOUT"}
                    </li>




                </ul>
            </div>
            <div className="topRight">
                {user ? (
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnGm_Tk2JSKNTAVLRp_LGyo9ErKLuak0FGWC9FvL3ZBQ&s" className='topImg' alt="" srcset="" />
                ) : (
                    <ul className='topList'>
                        <li className='topListItem'><Link className='link' to="/login">LOGIN</Link></li>
                        <li className='topListItem'><Link className='link' to="/register">REGISTER</Link></li>

                    </ul>
                )}

                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>

        </div>
    )
}
