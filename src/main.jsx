import React, { useContext } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { UserContextProvider } from './components/Context/UserContextProvider.jsx'

import { App } from './App.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
    <App/>

    </UserContextProvider>
  </React.StrictMode>,
)


