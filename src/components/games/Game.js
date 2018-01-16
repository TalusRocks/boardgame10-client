import React from 'react';
import { Link } from 'react-router-dom'
// import GameStar from './GameStar';

const Game = ({ gameName, gameStars, challengeId, playGoal }) => {

  let remainingStarsNum = playGoal - gameStars.length
  let remainingStarsHTML = []
  for (var i = 0; i < remainingStarsNum; i++) {
    remainingStarsHTML.push(
      <Link to='/challenge/1/addplay' key={i}>
        <i key={i} className="material-icons">star_border</i>
      </Link>
    )
  }

  //ONLY print stars that match the challenge id
  return (
    <section className="game-container">
      <h2 className="game-title text-center mtb-05">{ gameName }</h2>
      <div className="game-stars mtb-05">

        { gameStars.map ((el, i) => {
          if(el.challenge_id === challengeId){
            return <i key={i} className="material-icons">star</i>
          }
        })}
        { remainingStarsHTML }

      </div>
    </section>
  )
}

export default Game;

// <GameStar key={i}/>
