import dexstyle from './Content.module.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import Dialogs from './Dialogs/Dialogs';
import News from './News/News';



function Content(props) {

    let MessagesData = [
        { id: 1, messageText: 'Hi, Dexmi!' },
        { id: 2, messageText: 'Yes, its kruto!' },
        { id: 3, messageText: 'Oky spoki, bro.' },
        { id: 4, messageText: 'Oh, ola la!' },
        { id: 5, messageText: 'Goood moorning!' }
    ];

    return (
        <div className={dexstyle.contentWrapper}>
            <Routes>
                <Route path="/" element={<null />} />
                <Route path="/Main" element={<Main />} />
                <Route path="/Dialogs/*" element={<Dialogs  MessagesData={MessagesData}/>} />
                <Route path="/News/*" element={<News />} />
            </Routes>
        </div>

    )
};

export default Content;