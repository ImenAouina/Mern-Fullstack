import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';

function App() {

  return (
    <div className="app">
      <Header/>
      <div className="maincontent">
        <Navigation />
        <Main/> 
      </div>
    </div>
  );
}
                
export default App;

