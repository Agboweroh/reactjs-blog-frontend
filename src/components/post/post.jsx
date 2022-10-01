import './post.css'
export default function post() {
    return (
        <div className='post'>

            <img className='postImg' src="https://images.pexels.com/photos/6231584/pexels-photo-6231584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

            <div className="postInfo">
                <div className="postCats">
                    <span className="postCats">Music</span>
                    <span className="postCats">Life</span>

                </div>

                <span className="postTitle">
                    Lorem, ipsum dolor sit amet consectetur

                </span>
                <hr />
                <span className="postDate">1 hr ago</span>
            </div>
            <p className='postDescription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor est suscipit necessitatibus sunt, expedita nihil voluptatum tempora corrupti deserunt itaque veritatis iure eaque. Minima saepe eum facilis neque eos illum!
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor est suscipit necessitatibus sunt, expedita nihil voluptatum tempora corrupti deserunt itaque veritatis iure eaque. Minima saepe eum facilis neque eos illum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor est suscipit necessitatibus sunt, expedita nihil voluptatum tempora corrupti deserunt itaque veritatis iure eaque. Minima saepe eum facilis neque eos illum!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor est suscipit necessitatibus sunt, expedita nihil voluptatum tempora corrupti deserunt itaque veritatis iure eaque. Minima saepe eum facilis neque eos illum!
            </p>
        </div>
    )
}
