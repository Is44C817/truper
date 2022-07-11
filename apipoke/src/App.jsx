import Search from './components/Search'
import React, {useState, useEffect} from 'react'
import { PokemonsProvider } from './context/PokemonsProvider';

function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('')
  const [prevtUrl, setPrevUrl] = useState('')
  const [loading, setLoading] = useState('')
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon'

  return (
    <>
    <PokemonsProvider>
      <Search />
    </PokemonsProvider>

    </>

  )
}

export default App
