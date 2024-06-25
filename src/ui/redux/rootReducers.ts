import { combineReducers } from '@reduxjs/toolkit'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'

import { pokemonSlice } from './slices/pokemon/pokemonSlice'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

/* Insertar todos los Slice AQUI */
const reducer = combineReducers({
    pokemons: pokemonSlice.reducer,
})

const persistedReducer = persistReducer(persistConfig, reducer)

export default persistedReducer
