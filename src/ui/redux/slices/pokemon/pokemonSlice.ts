import { createSlice } from '@reduxjs/toolkit'

// Define la interfaz para un Pokémon
interface IPokemon {
    name: string;
    url: string;
}

// Define la interfaz para el estado inicial
interface IPokemonsAll {
    pokemonsAll: IPokemon[];
}

// Estado inicial
const initialState: IPokemonsAll = {
    pokemonsAll: [],
}

export const pokemonSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

    getAllPokemons: (state, action) => {
        state.pokemonsAll = action.payload
    },

  },
})

export const { getAllPokemons } = pokemonSlice.actions
export default pokemonSlice.reducer