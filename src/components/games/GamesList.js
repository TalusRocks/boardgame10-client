import React from 'react';
import Game from './Game';

const GamesList = ({ gameList, challengeId }) => {
  return (
    <main className="main-content">
      { gameList.map((el, i) => {
        return <Game key={i}
          gameName={el.name}
          gameStars={el.stars}
          challengeId={challengeId}/>
      })}
    </main>
  )
}

export default GamesList;
