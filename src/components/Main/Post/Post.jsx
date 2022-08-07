import dexstyle from './Post.module.css';
import icon from './photo.png';

function Post(props) {
    return (

        <div className={dexstyle.post}>
            <p className={dexstyle.post__name}>
                My post
            </p>
            <img className={dexstyle.post__icon} src={icon} alt="" />
            <p className={`${dexstyle.post__description} ${dexstyle.post__text}`}>
                {props.message}
            </p>
            <p className={dexstyle.like}> like {props.like} </p>
        </div>

    )
}

export default Post;