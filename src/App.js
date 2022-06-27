import './App.css';
import MyNavbar from './components/MyNavbar';
import Home from './components/Home';
import Bucharest from './components/Bucharest';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <MyNavbar/>
      <div id="page-container">
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Bucharest" element={<Bucharest/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
