import { Provider } from 'react-redux'
import { store } from './redux/store'

import AppRouters from './routers/AppRouters'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <AppRouters />
      </Provider>
    </>
  )
}

export default App
