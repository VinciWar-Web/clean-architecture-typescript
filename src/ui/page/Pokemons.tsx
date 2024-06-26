import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import GetPokemonsUseCase from '../../domain/Pokemons/GetPokemonsUseCase'
import { getAllPokemons } from '../redux/slices/pokemon/pokemonSlice'

import { Box, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material'
import { PokemonsInterface } from '../../data/interfaces'
import { RootState } from '../redux/store'
import { useTranslation } from 'react-i18next'


const Pokemons = () => {

    // Estado General
    const pokemons = useSelector((state: RootState) => state.pokemons.pokemonsAll)

    // Estado Local
    const [pokemonsAll, setPokemonsAll] = useState<PokemonsInterface[]>([])
    const [language, setLanguage] = useState<string>('es')
    
    // Data en consola del estado local
    console.log(pokemonsAll)

    // Helpers
    const dispatch = useDispatch()
    const [t, i18n] = useTranslation('global')

    // Manejadores
    const handleChange = (event: SelectChangeEvent) => {
        const lang = event.target.value as string
        setLanguage(lang)
        i18n.changeLanguage(lang)
    }

    // Estado inicial
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
            <Typography variant="h3">{t('title.welcome')}</Typography>

            <Select
                label="Lenguaje"
                value={language}
                onChange={handleChange}
            >
                <MenuItem value={'es'}>Español</MenuItem>
                <MenuItem value={'en'}>Ingles</MenuItem>
            </Select>

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
