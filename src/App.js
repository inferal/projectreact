import React, { Component } from 'react';
import './App.css';

import Header from './views/Headre';
import Services from './views/Services';
import About from './views/About';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Services />
        <About />
      </div>
    );
  }
}

export default App;
