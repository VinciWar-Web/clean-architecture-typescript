import { useEffect } from 'react'
import GetPokemonsUseCase from '../domain/Pokemons/GetPokemonsUseCase'
import { useDispatch } from 'react-redux'
import { getAllPokemons } from './redux/slices/pokemon/pokemonSlice'


const App = () => {

    // Helpers
    const dispatch = useDispatch()

  useEffect(() => {
    
    const fetchData = async () => {
      const { jsonData, body } = await new GetPokemonsUseCase().call()
      dispatch(getAllPokemons(jsonData))
      console.log(jsonData)
      console.log(body)
    }

    fetchData() // Llama a la función asíncrona inmediatamente
  }, [])
  

  return (
    <div>
      <h1>App</h1>
    </div>
  )
}

export default App
