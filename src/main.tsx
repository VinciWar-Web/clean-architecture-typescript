import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './ui/App.tsx'
import './common/style/index.css'

import { Provider } from 'react-redux'
import { store } from './ui/redux/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>,
)
