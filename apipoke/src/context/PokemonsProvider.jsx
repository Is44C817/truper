import { useState, useEffect, createContext } from "react";
import axios from 'axios'

const PokemonsContext = createContext()

const PokemonsProvider = ({children}) => {

    const [pokemons, setPokemons] = useState([])

    const obtenerPokemons = async () =>{
        try{
            const url = 'https://pokeapi.co/api/v2/pokemon'

            const {data} = await axios(url)
            setPokemons(data.results)
            console.log(data.results)

        }catch(error){
            console.log(error)
        }
    }

    useEffect(() => {
        obtenerPokemons()
    }, [])

    return (
        <PokemonsContext.Provider 
            value={{pokemons}}
        >
            {children}
        </PokemonsContext.Provider>
    )
}

export{
    PokemonsProvider
}

export default PokemonsContext;