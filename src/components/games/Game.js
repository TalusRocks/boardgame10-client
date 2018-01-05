import React from 'react';
import GameStar from './GameStar';

const Game = ({}) => {
  return (
    <section className="game-container">
      <h2 className="game-title text-center mtb-05">Game Title</h2>
      <div className="game-stars mtb-05">
        <GameStar />
      </div>
    </section>
  )
}

export default Game;
