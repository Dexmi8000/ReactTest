import dexstyle from './Main.module.css';
import Post from './Post/Post';
import CreatePost from './CreatePost/CreatePost'

let MyPostsData = [
    {id: 1, name: 'Alex (My)', message: 'Hi, Dexmi!', like: '10'},
    {id: 2, name: 'Alex (My)', message: 'Best of the best', like: '8'}
]

function Main() {
    return (
        <main className={dexstyle.main}>
            <div className={dexstyle.posts}>
                <CreatePost />
                <Post name={MyPostsData[0].name} message={MyPostsData[0].message} like={MyPostsData[0].like} />
                <Post name={MyPostsData[1].name} message={MyPostsData[1].message} like={MyPostsData[1].like} />
            </div>
        </main>
    )
}

export default Main;