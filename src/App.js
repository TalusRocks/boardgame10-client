import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router } from 'react-router-dom'

import CurrentChallenge from './components/games/CurrentChallenge'

import './App.css';
import { connect } from 'react-redux'

const baseURL = `http://localhost:3000`

const App = ({ allChallenges }) => (
  (
    <div>
      <CurrentChallenge
        allChallenges={allChallenges}/>
    </div>
  )

)

{/* <Router>
  <Route path="/" component={GameList}/>
</Router> */}

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
