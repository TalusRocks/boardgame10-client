import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import CurrentChallenge from './components/games/CurrentChallenge'
import AddPlay from './components/forms/AddPlay'

import './App.css';
import { connect } from 'react-redux'

const baseURL = `http://localhost:3000`

const App = ({ allChallenges }) => (
  <Router>
    <div>
    <Route exact path='/challenge/1'
      component={ (props) => <CurrentChallenge {...props}
      allChallenges={ allChallenges } /> }/>
      <Route path='/challenge/1/addplay'
        component={ AddPlay }/>
    </div>
  </Router>
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
