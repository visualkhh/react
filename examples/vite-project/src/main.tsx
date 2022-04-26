import React from 'react'
import {QueryClientProvider} from 'react-query'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './scss/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
            <App/>
    </React.StrictMode>
)