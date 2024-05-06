import React,{ useState, useEffect } from 'react';
import './App.css';
import axios from 'axios'


function App() {
  const [pokemon, setPokemons] = useState([]);
 
  ////////////Axios/////////////////
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/ditto")
      .then(res => {
        console.log(res.data)
        setPokemons(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  //////////fetch//////////////////
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/ditto")
      .then((pokemonRes) => {
        console.log(pokemonRes)
        return pokemonRes.json()
      }).then(pokemonRes => {
        console.log(pokemonRes)
        setPokemons(pokemonRes)
        console.log(pokemonRes)
      })
      .catch((err) => {
        console.log(err)
      })
    } , [])
  
    
  return (
    <div className="App">
      <h1>Fetch Pokemon</h1>
      <ul>
          {pokemon.map((p, index) => 
            
              <li key={index}> {p.name} </li>
          )}
      </ul> 
    </div>
  );
}

export default App;
