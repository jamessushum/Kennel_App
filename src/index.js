import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import Kennel from './components/Kennel'
import * as serviceWorker from './serviceWorker';

// <Router /> from react-router-dom library tells React that Routes are being used in <Kennel />.
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Kennel />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
