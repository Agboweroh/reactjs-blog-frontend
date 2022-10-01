import './header.css'

export default function Header() {
    return (
        <div className='header'>

            <div className="headerTitles">
                <span className='headerTitleSm' >Node & React</span>
                <span className='headerTitleLg' >Blog</span>


            </div>
            <img className='headerImg' src="https://images.pexels.com/photos/2073622/pexels-photo-2073622.jpeg?cs=srgb&dl=pexels-brett-sayles-2073622.jpg&fm=jpg" alt="" />
        </div>
    )
}
