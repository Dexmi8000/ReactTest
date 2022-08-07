import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Navigation';
import Main from './components/Main/Main';




function App() {
  return (
    <div className="App">
      <div className="dexmi">
        <div className='wrap'>
          <Header />
          <Nav />
          <Main />
        </div>
      </div>
    </div>
  );
}



export default App;
