import './App.css';
//import Tabs from './components/Tabs';
import {useState} from 'react';
import {Routes, Route, Link} from 'react-router-dom';
import Create from './components/Create';
import Display from './components/Display';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const tabsArray= [
    {title:"tab1", content:"Tab1 content is showing here"},
    {title:"tab2", content:"Tab2 content is showing here"},
    {title:"tab3", content:"Tab3 content is showing here"}
  ]
  const [tablist, setList]=useState(tabsArray)
  console.log(tablist)

  const add=(newTab) => {
    setList([...tablist,newTab])
    console.log(tablist)
  }

  const remove=(id) => {
    setList(tablist.filter((item,index) => { return item !== id}))
    console.log(tablist)
  }
  return (
    <div className="App">
      <h1>tabs</h1>
        <Link to = "/"> Home </Link>
        <Routes>
          <Route path='/' element ={<Display remove={remove} tablist={tablist}/>} />
          <Route path='/add' element={<Create add={add} />} />
        </Routes>
    </div>
  );
}

export default App;
