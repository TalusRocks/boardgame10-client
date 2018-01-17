import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import CurrentChallenge from './components/games/CurrentChallenge'
import AddPlay from './components/forms/AddPlay'
import EditPlay from './components/forms/EditPlay'

import './App.css';
import { connect } from 'react-redux'

// const baseURL = `http://localhost:3000`

const App = ({ allChallenges }) => (
  <Router>
    <div>

    <Route exact path='/challenge/1'
      component={ (props) => <CurrentChallenge {...props}
      allChallenges={ allChallenges } /> }/>

    <Route path='/challenge/1/addplay'
      component={ AddPlay }/>
    <Route path='/challenge/1/editplay'   component={ EditPlay }/>

    </div>
  </Router>
)

//12. Here the state maps to the props...
const mapStateToProps = state => ({
    allChallenges: state.challenges.all
  })
//13 and the dispatches.
const mapDispatchToProps = state => ({})

//14 and the App.
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
