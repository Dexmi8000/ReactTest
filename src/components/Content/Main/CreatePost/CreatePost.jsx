import dexstyle from './CreatePost.module.css';
import icon from './photo.png';

function CreatePost() {
    return (

        <div className={dexstyle.post}>
            <p className={dexstyle.post__name}>Create post</p>
            <img className={dexstyle.post__icon} src={icon} alt="" />
            <p className={dexstyle.post__description}>What do you tell us?</p>
            <form className={dexstyle.post__form} action="">
                <input className={dexstyle.post__inp} type="text" placeholder='Message...' />
                <button className={dexstyle.post__btn}>Send</button>
            </form>
        </div>

    )
}

export default CreatePost;