import React, { Component } from 'react';
import './App.css';

import Header from './views/Headre';
import Services from './views/Services';
import About from './views/About';
import Portfolio from './views/portfolio';
import Team from './views/Team';
import Statick from './views/Statick';
import News from './views/News';
import Feedback from './views/Feedback';
import Contact from './views/Contact';
import Footer from './views/Footer';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Services />
        <About />
        <Portfolio />
        <Team />
        <Statick />
        <News />
        <Feedback />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
