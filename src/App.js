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
      allChallenges: []
    }
  }

  async componentDidMount(){
    await this.getChallenge()
  }

  async getChallenge(){
    //# hardcoded for now, will pass this variable in later
    let currentChallenge = 1

    const response = await axios.get(`${baseURL}/challenge/${currentChallenge}`)

    await this.setState({
      allChallenges: [...this.state.allChallenges, response.data.challenge]
    })

  }


  render() {

    return (
      <div>
        <Navigation />
        {(this.state.allChallenges.length && <GamesList
          gameList={ this.state.allChallenges[0].games} challengeId={1}/>)}

      </div>
    );
  }
}

export default App;
