import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GetPokemonsUseCase from '../../domain/Pokemons/GetPokemonsUseCase'
import { getAllPokemons } from '../redux/slices/pokemon/pokemonSlice'

import { Box, Typography } from '@mui/material'
import { PokemonsInterface } from '../../data/interfaces'
import { RootState } from '../redux/store'


const Pokemons = () => {


    const pokemons = useSelector((state: RootState) => state.pokemons.pokemonsAll)

    const [pokemonsAll, setPokemonsAll] = useState<PokemonsInterface[]>([])
    
    console.log(pokemonsAll)

    // Helpers
    const dispatch = useDispatch()

    useEffect(() => {
        
        const fetchData = async () => {
            const { jsonData } = await new GetPokemonsUseCase().call()
            dispatch(getAllPokemons(jsonData))
            setPokemonsAll(jsonData)
        }
    
        fetchData() // Llama a la función asíncrona inmediatamente

    }, [])

    return (
        <Box>
            <Typography variant="h3">Pokemons</Typography>

            {
                pokemons.map( pokemon => (
                    <Box key={pokemon.name}>
                        <Typography>{pokemon.name}</Typography>
                    </Box>
                ))
            }
        </Box>
    )
}

export default Pokemons
