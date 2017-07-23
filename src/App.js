import React, { Component } from 'react';
import './App.css';

import Header from './views/Headre';
import Services from './views/Services';
import About from './views/About';
import Portfolio from './views/portfolio';
import Team from './views/team';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Services />
        <About />
        <Portfolio />
        <Team />
      </div>
    );
  }
}

export default App;
