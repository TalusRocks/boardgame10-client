import React from 'react';
import Game from './Game';

const GamesList = ({ gameList }) => {

  return (
    <main className="main-content">
      { gameList.map((el, i) => {
        return <Game key={i} gameName={el.name} gameStars={el.stars}/>
      })}
    </main>
  )
}

export default GamesList;
