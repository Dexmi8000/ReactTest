import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Navigation';
import Main from './components/Main/Main';
import Messages from './components/Messages/Messages';
import { Route, Routes } from 'react-router-dom';





function App() {
  return (
    
      <div className="App">
        <div className="dexmi">
          <div className='wrap'>
            <Header />
            <Nav />
            <div className="content-wrapper">
              
                <Routes>
                  <Route path="/Main" element={<Main />} />
                  <Route path="/Messages" element={<Messages />} />
                </Routes>
              

            </div>

          </div>
        </div>
      </div>
    

  );
}



export default App;
