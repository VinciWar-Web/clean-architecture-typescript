import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { router } from '../../common/utils/router'

import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'

import Error404 from '../page/Error404'
import Pokemons from '../page/Pokemons'

import Login from '../page/Login'

const AppRouters = () => {

    // Helpers
    // const dispatch = useDispatch()

     // Asegura que la APP inicie con todos los spinner detenidos
    // useEffect(() => {
    //     dispatch(toggleSpinner(false))
    //     dispatch(toggleSpinnerLoading(false))
    //     dispatch(toggleSpinnerLogout(false))
    // }, [dispatch])

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path={router.login}
                    element={
                        <PublicRoute>
                            <Login />
                        </PublicRoute>
                    }
                />

                <Route
                    path={router.home}
                    element={
                        <PrivateRoute>
                            <Pokemons />
                        </PrivateRoute>
                    }
                />

                <Route path='*' element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouters
