import React, { Component } from 'react';
import axios from 'axios'
import Navigation from './components/shared/Navigation'
import GamesList from './components/games/GamesList'
import './App.css';
const baseURL = `http://localhost:3000`

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      games: []
    }
  }

  async componentDidMount(){
    await this.getGameList()
  }

  async getGameList(){
    const response = await axios.get(`${baseURL}/games`)

    this.setState({
      games: response
    })
    console.log(this.state.games.data);
  }

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
