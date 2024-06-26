import { Provider } from 'react-redux'
import { store } from './redux/store'

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

import { I18nextProvider } from 'react-i18next'
import i18n from '../common/utils/translations/i18next.config'

import AppRouters from './routers/AppRouters'

const persistor = persistStore(store)

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <I18nextProvider i18n={i18n}>
            <AppRouters />
          </I18nextProvider>
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
