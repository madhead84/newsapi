import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { fetchNews } from "./services/NewsApiService";

fetchNews()
    .then((response) => {
        console.log('response', response);
    })
    .catch((error) => {
        console.log('Could not fetch', error);
    });


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);


root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
