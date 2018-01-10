import React from 'react';
import GameStar from './GameStar';

const Game = ({ gameName, gameStars }) => {

  return (
    <section className="game-container">
      <h2 className="game-title text-center mtb-05">{ gameName }</h2>
      <div className="game-stars mtb-05">

        { gameStars.map ((el, i) => {
          return <GameStar key={i}/>
        })}

      </div>
    </section>
  )
}

export default Game;
