import { useEffect } from 'react'
import GetPokemonsUseCase from '../domain/Pokemons/GetPokemonsUseCase'


const App = () => {

  useEffect(() => {
    
    const fetchData = async () => {
      const { jsonData, body } = await new GetPokemonsUseCase().call()
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
