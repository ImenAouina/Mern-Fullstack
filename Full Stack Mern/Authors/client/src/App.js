import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import Update from './components/Update';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {
  const [authors, setAuthors] = useState([])
  return (
    <div className="App">
      
      <Routes>
        {/* Dashboard */}
        <Route path="/authors" element={<Dashboard authors={authors} setAuthors={setAuthors} />} />
        <Route path="/authors/new" element={<Create authors={authors} setAuthors={setAuthors} />} />
        <Route path="/authors/:id/edit" element={<Update />} />

      </Routes>
      
      
    </div>
  );
}

export default App;
