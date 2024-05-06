
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './components/Home';
//import NumComponent from './components/NumComponent';
import WordComponent from './components/WordComponent';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/home" element={<Home/>}/>
            {/* <Route path="/:num" element={<NumComponent/>}/> */}
            <Route path="/:word" element={<WordComponent/>}/>
            <Route path="/:word/:color/:backcolor" element={<WordComponent/>}/>
          </Routes>
          
        </div>
    </BrowserRouter>
  );
}

export default App;
