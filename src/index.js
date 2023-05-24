import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Store7 from './Components/Store7';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Provider store={Store7}>
    <App />
    </Provider>
    
  </React.StrictMode>
);