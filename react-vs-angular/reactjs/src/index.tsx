import React, {ReducerAction} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import {Action, createStore} from 'redux'

const count = 0
function reducer(state = count, action:  Action<any>) {
    if (action.type === 'up') {
        state++;
    } else if (action.type === 'down') {
        state--;
    }
    return state;
}
const store = createStore(reducer);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);
reportWebVitals();
