import { Navigate } from 'react-router-dom'
import { ChildrenInterface } from '../interfaces'

const PrivateRoute = ({ children }: ChildrenInterface) => {
    // const { access = [] } = useSelector((state) => state.auth)
    // const { sessionId = '' } = access

    const sessionId: string = '123'

    return sessionId ? children : <Navigate to='/' />
}

export default PrivateRoute
