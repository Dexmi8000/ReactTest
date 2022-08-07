import dexstyle from './Main.module.css';
import Post from './Post/Post';
import Create_post from './Create_post/Create_post'

function Main() {
    return (
        <main className={dexstyle.main}>
            <div className={dexstyle.posts}>
                <Create_post />
                <Post message='Hi, Dexmi!' like='10'/>
                <Post message='Best of the best' like='8'/>
            </div>
        </main>
    )
}

export default Main;