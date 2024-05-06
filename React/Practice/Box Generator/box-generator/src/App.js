import './App.css';
import Form from './components/Form';
import Box from './components/Box';
import React, { useState }  from 'react';


function App() {
  const [boxes, setBoxes]=useState([]);
  const addBox=(color,width,height) =>{
      const box={color_box: color,
                width_box: width,
                height_box: height};
      setBoxes([...boxes,box]);
  }
  
  return (
    <div className="App">
      <Form addBox={addBox}/>
      <Box boxes={boxes} />
    </div>
  );
}

export default App;
