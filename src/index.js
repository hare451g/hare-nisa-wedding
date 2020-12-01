import React from 'react';
import ReactDOM from 'react-dom';

// App Containers
import App from './containers/App';

// web vitals
import reportWebVitals from './reportWebVitals';

// render app root
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
