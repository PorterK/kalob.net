/* eslint
  react/jsx-filename-extension: "off",
*/

import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

import ScrollMagic from 'scrollmagic';

import 'img/favicon.ico';

import App from './routes/App';
import Home from './routes/Home';

const controller = new ScrollMagic.Controller();

render(
  <Router>
    <App>
      <Route exact path="/">
        <Home controller={controller} />
      </Route>
    </App>
  </Router>,
  document.getElementById('root')
);
