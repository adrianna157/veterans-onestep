import React from 'react';
import {createRoot} from 'react-dom/client';
import App from '../components/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.querySelector('#root');
const root = createRoot(container);

root.render(<App />);