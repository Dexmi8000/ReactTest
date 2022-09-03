import dexstyle from './Content.module.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';



function Content(props) {

   

    return (
        <div className={dexstyle.contentWrapper}>
            <Routes>
                <Route path="/" element={<null />} />
                <Route path="/Main" element={<Main MyPostsData={props.MyPostsData}/>} />
                <Route path="/Dialogs/*" element={<Dialogs  MessagesData={props.MessagesData}/>} />
                <Route path="/News/*" element={<News />} />
            </Routes>
        </div>

    )
};

export default Content;