import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navigation/Navigation';
import Content from './components/Content/Content';
import { BrowserRouter } from 'react-router-dom';


function App(props) {
    
    
    
  return (
    <BrowserRouter>
      <div className="App">

        <div className='wrap'>
          <Header />
          <Nav />          
          <Content MessagesData={props.MessagesData} MyPostsData={props.MyPostsData}/>            
        </div>

      </div>
    </BrowserRouter>
  );
}


export default App;
