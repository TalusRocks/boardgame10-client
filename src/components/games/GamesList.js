import React from 'react';
import Game from './Game';

const GamesList = ({ gameList, challengeId, playGoal }) => {
  return (
    <main className="main-content">
      { gameList.map((el, i) => {
        return <Game key={i}
          gameId={el.id}
          gameName={el.name}
          gameStars={el.stars}
          challengeId={challengeId}
          playGoal={playGoal}/>
      })}
    </main>
  )
}

export default GamesList;
