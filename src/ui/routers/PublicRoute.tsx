import { Navigate } from 'react-router-dom'
import { ChildrenInterface } from '../interfaces'

const PublicRoute = ({ children }: ChildrenInterface) => {
    // const { access = [] } = useSelector((state) => state.auth)
    // const { sessionId = '' } = access

    const sessionId: string = '123'

    return sessionId ? <Navigate to='/home' /> : children
}

export default PublicRoute
