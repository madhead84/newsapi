import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

fetch('https://newsapi.org/v2/everything?q=tesla&from=2025-01-24&sortBy=publishedAt&apiKey=dc71297702b14b8aa2739c646a6a118b')
    .then(response => response.json())
    .then((json) => {
        console.log(json);
    });

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
