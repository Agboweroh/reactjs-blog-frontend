import './singlePage.css'
import SideBar from '../../components/sidebar/SideBar'
import SinglePost from '../../components/singlepost/SInglePost'
export default function SinglePage() {
    return (
        <div className='singlePage' >
            <SinglePost />
            <SideBar />
        </div>
    )
}
