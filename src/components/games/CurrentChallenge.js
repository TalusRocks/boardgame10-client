import React from 'react';
import Navigation from '../shared/Navigation'
import GamesList from './GamesList'

const CurrentChallenge = ({ allChallenges}) => {

  return (
    <div>
      <Navigation/>
      <GamesList
        playGoal={allChallenges.num_plays}
        gameList={allChallenges.games}
        challengeId={1}
      />
    </div>
  )
}

export default CurrentChallenge;
