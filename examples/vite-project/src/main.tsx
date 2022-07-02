import React from 'react'
import {QueryClientProvider} from 'react-query'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './scss/index.scss'
import {RecoilRoot} from 'recoil';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RecoilRoot>
            <App/>
        </RecoilRoot>
    </React.StrictMode>
)
