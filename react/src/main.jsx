import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App2 from './App2.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux"
import { store } from './store.js'

createRoot(document.getElementById('root')).render(
  //<StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App2 />
      </Provider>
    </BrowserRouter>
  //</StrictMode>,
)
