import { configureStore } from '@reduxjs/toolkit'
import persistedReducer from './rootReducers'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
})

// Inferir los tipos `RootState` y `AppDispatch` de la propia tienda
export type RootState = ReturnType<typeof store.getState>
// Tipo inferido: {publicaciones: PostsState, comentarios: CommentsState, usuarios: UsersState}
export type AppDispatch = typeof store.dispatch