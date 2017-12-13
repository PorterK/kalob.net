import React, { Component } from 'react';

import Splash from './components/Splash';
import About from './components/About';
import Footer from './components/Footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Splash />
        <About />
        <Footer />
      </div>
    );
  }
}
