import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"
const root = ReactDOM.createRoot(document.getElementById('root'));
import { Provider } from 'react-redux';
import { store } from './store/store';


root.render(
    <Provider store={store}>
        <App />
    </Provider>
);


