import React, { Component } from 'react';
import axios from 'axios'
import Navigation from './components/shared/Navigation'
import GamesList from './components/games/GamesList'
import './App.css';
import { connect } from 'react-redux'

const baseURL = `http://localhost:3000`

const App = ({ stars, allChallenges }) => (
  (stars.length) ?
    (
      <div>
        <Navigation />
        {<GamesList
          playGoal={ allChallenges.num_plays}
          gameList={ allChallenges.games }
          challengeId={1}/>}
      </div>
    ) :
    'hey you dont got no stars'
)

//12. OMG. All this down here is how the props get... wait for it.. mapped to state.
const mapStateToProps = state => ({
    allChallenges: state.challenges.all,
    stars: state.stars.all
  })
//13 and the dispatches.
const mapDispatchToProps = state => ({})

//14 and the App.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
