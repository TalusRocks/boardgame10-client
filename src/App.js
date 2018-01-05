import React, { Component } from 'react';
import Navigation from './components/shared/Navigation'
import GamesList from './components/games/GamesList'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <GamesList />
      </div>
    );
  }
}

export default App;
