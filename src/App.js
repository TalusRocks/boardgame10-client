import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <p className="brand">brand</p>
          <i className="menu-burger material-icons">menu</i>
        </nav>
        <main className="main-content">
          <section className="game-container">
            <h2 className="game-title text-center mtb-05">Game Title</h2>
            <div className="game-stars mtb-05">
              <i class="material-icons">star_border</i>
              <i class="material-icons">star_border</i>
              <i class="material-icons">star_border</i>
              <i class="material-icons">star_border</i>
              <i class="material-icons">star_border</i>
              <i class="material-icons">star_border</i>
              <i class="material-icons">star_border</i>
              <i class="material-icons">star_border</i>
              <i class="material-icons">star_border</i>
              <i class="material-icons">star_border</i>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
