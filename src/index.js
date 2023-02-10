import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <App />
 //eliminamos las etiquetas de strict mode para que funcione el localStorage sin problema y al recargar la página se mantengan las notes guardadas
);


