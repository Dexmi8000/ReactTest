import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Messages from './components/Messages/Messages';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import News from "./components/News/News"


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <div className='wrap'>
          <Header />
          <Nav />
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<null />} />
              <Route path="/Main" element={<Main />} />
              <Route path="/Messages" element={<Messages />} />
              <Route path="/News" element={<News />} />
            </Routes>
          </div>
        </div>

      </div>
    </BrowserRouter>
  );
}


export default App;
