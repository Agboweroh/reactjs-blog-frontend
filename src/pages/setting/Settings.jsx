import './settings.css'
import SideBar from '../../components/sidebar/SideBar'
export default function Settings() {
    return (
        <div className='settings'>

            <div className="settingsWrapper">
                <div className="settingTitle">
                    <span className="settingUpdateTitle">Update Your Account</span>
                    <span className="settingDeleteTitle">Delete Your Account</span>


                </div>
                <form className="settingForm">
                    <label profile picture></label>
                    <div className="settingPP">
                        <img src="https://independent.ng/wp-content/uploads/IMG-20200528-WA0000.jpg" alt="" />
                        <label htmlFor="fileInput">
                            <i className="settingPPIcon fa-solid fa-user"></i>
                        </label>
                        <input type="file" name="" id="fileInput" style={{ display: 'none' }} />
                    </div>
                    <label htmlFor="">Username</label>
                    <input type="text" name="" id="" placeholder=' jakes' />

                    <label htmlFor="">email</label>
                    <input type="email" name="" id="" placeholder='jakes@gmail.com' />

                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="" placeholder='password' />

                    <button className="settingSubmit">Update</button>
                </form>
            </div>
            <SideBar />
        </div>
    )
}
