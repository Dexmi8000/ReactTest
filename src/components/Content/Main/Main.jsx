import dexstyle from './Main.module.css';
import Post from './Post/Post';
import CreatePost from './CreatePost/CreatePost'





function Main(props) {
    
    let Posts = props.MyPostsData.map(post => <Post name={post.name} message={post.message} like={post.like}/>)
    
    return (
        <main className={dexstyle.main}>
            <div className={dexstyle.posts}>
                <CreatePost />
                {Posts}
            </div>
        </main>
    )
}

export default Main;