import React from 'react';

import { Route } from 'react-router-dom';

import Home from './Home';
import Projects from './Projects';
import Story from './Story';

export default function Routes() {
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/story" component={Story} />
    </>
  );
}
