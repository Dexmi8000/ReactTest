import dexstyle from './Content.module.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Main from './Main/Main';
import Messages from './Messages/Messages';
import News from './News/News';

function Content(props) {
    return (
        <div className={dexstyle.contentWrapper}>
            <Routes>
                <Route path="/" element={<null />} />
                <Route path="/Main" element={<Main />} />
                <Route path="/Messages/*" element={<Messages />} />
                <Route path="/News" element={<News />} />
            </Routes>
        </div>

    )
};

export default Content;