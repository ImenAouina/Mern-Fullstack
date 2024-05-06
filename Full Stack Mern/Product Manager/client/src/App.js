import './App.css';
import Main from './View/Main';
import OneProduct from './components/OneProduct';
import Update from './components/Update';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path ="/products" element = {<Main/>} /> 
        <Route path="/products/:id" element={<OneProduct/>} />
        <Route path='/products/edit/:id' element={<Update/>} />
      </Routes>
      
    </div>
  );
}

export default App;
