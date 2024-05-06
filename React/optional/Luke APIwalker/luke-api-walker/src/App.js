
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import People from './components/People';
import Planets from './components/Planets';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Form/>
        <Routes>
          <Route path="/people/:id" elemnet={<People/>} />
          <Route path="/planets/:id" elemnt={<Planets/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
