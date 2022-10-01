import './singlePost.css'

export default function SinglePost() {
    return (
        <div className='singlePost' >

            <div className="singlePostwrapper">
                <img className='singlePostImg' src="https://images.pexels.com/photos/7626637/pexels-photo-7626637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

                <h1 className="singlePostTitle">Lorem ipsum, dolor sit amet consectetur
                    <div className="singlePostEdit">
                        <i className="singlePostIcon fa-sharp fa-solid fa-pen-to-square"></i>
                        <i className="singlePostIcon fa-sharp fa-solid fa-trash"></i>

                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Author:<b>Jakes</b></span>
                    <span className="singlePostDate">1 hr ago</span>

                </div>
                <p className='singlePostDesc'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium id fugit quidem! Eos dignissimos praesentium veniam, numquam aliquid ab repellendus nulla officia recusandae non vitae accusantium rerum nisi nemo? Consectetur.

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium id fugit quidem! Eos dignissimos praesentium veniam, numquam aliquid ab repellendus nulla officia recusandae non vitae accusantium rerum nisi nemo? Consectetur.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium id fugit quidem! Eos dignissimos praesentium veniam, numquam aliquid ab repellendus nulla officia recusandae non vitae accusantium rerum nisi nemo? Consectetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium id fugit quidem! Eos dignissimos praesentium veniam, numquam aliquid ab repellendus nulla officia recusandae non vitae accusantium rerum nisi nemo? Consectetur.
                </p>
            </div>


        </div>
    )
}
