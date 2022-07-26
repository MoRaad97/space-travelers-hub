import React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './Redux/configureStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
