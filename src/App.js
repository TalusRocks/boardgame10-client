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
      ...this.state,
      games: response.data
    })
    // console.log(this.state.games, "this.state.games");
  }

  render() {
    return (
      <div>
        <Navigation />
        <GamesList gameList={ this.state.games }/>
      </div>
    );
  }
}

export default App;
