import React from 'react';
import GameStar from './GameStar';

const Game = ({ gameName }) => {
  console.log(gameName, "gameName from Game.js");

  return (
    <section className="game-container">
      <h2 className="game-title text-center mtb-05">{ gameName }</h2>
      <div className="game-stars mtb-05">
        <GameStar />
      </div>
    </section>
  )
}

export default Game;
