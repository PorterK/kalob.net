import React, { Component } from 'react';

import Splash from './components/Splash';
import About from './components/About';
import Footer from './components/Footer';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Splash { ...this.props } />
        <About  { ...this.props } />
        <Footer />
      </div>
    );
  }
}
