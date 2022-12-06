import React from 'react';
import ReactDOM from 'react-dom/client';
import { store } from './store';
import App from './App';

import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>

  </Provider>
);  

