import './write.css'

export default function Write() {
    return (
        <div className='write'>

            <img className='writeImg' src="https://images.pexels.com/photos/1261427/pexels-photo-1261427.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <form className='writeForm'>

                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id='fileInput' style={{ display: 'none' }} />
                    <input type="text" id="title" placeholder='Title' className='writeInput' autoFocus={true} />
                </div>
                <div className="writeFormGroup">

                    <textarea className='writeInput writeText' type="text" placeholder="Tell your story..."></textarea>
                </div>
                <button className="writeSubmit">Publish</button>
            </form>
        </div>
    )
}
