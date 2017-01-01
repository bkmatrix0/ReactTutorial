import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import WelcomeDialog from './Component/Containment';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

ReactDOM.render(
    <WelcomeDialog/>,
    document.getElementById('containment')
)