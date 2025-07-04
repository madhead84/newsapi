import React from 'react';
import ReactDOM from 'react-dom/client';

import { NewsApp } from "./NewsApp/NewsApp";

import './index.css';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <React.StrictMode>
        <NewsApp/>
    </React.StrictMode>
);
