import logo from './logo.svg';
import './App.css';
import Birthday from './components/Birthday';

function App() {
  return (
    <div className="App">
      <Birthday 
      firstName={"Doe"}
      lastName={"Jane"}
      age={45}
      hairColor={"Black"}/>
      <Birthday 
      firstName={"Smith"}
      lastName={"John"}
      age={88}
      hairColor={"Brown"}/>
      
    </div>
  );
}

export default App;
