import './sidebar.css'
export default function SideBar() {
    return (
        <div className='sidebar' >

            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img src="https://images.pexels.com/photos/6231848/pexels-photo-6231848.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" width={300} height={300} alt="" />

                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis aspernatur temporibus, explicabo modi corrupti eum et. Dicta, saepe obcaecati autem ad accusantium adipisci, beatae exercitationem labore mollitia magnam, placeat esse.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">

                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">News</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Food</li>


                </ul>

            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <div className="sidebarSocialContainer">

                    <i className="sidebarIcons fa-brands fa-square-facebook"></i>
                    <i className="sidebarIcons  fa-brands fa-square-twitter"></i>
                    <i className="sidebarIcons  fa-brands fa-square-pinterest"></i>
                    <i className="sidebarIcons  fa-brands fa-square-instagram"></i>

                </div>


            </div>
        </div>
    )
}
