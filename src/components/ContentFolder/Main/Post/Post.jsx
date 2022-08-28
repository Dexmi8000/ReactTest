import dexstyle from './Post.module.css';
import icon from './photo.png';

function Post(props) {
    return (

        <div className={dexstyle.post}>
            <div className={dexstyle.post__name}>
                {props.name}
            </div>
            <div className={dexstyle.post__content}>
                <img className={dexstyle.post__icon} src={icon} alt="" />
                <p className={dexstyle.post__text}>
                    {props.message}
                </p>
                <p className={dexstyle.post__like}>
                    likes {props.like}
                </p>
            </div>
        </div>

    )
}

export default Post;