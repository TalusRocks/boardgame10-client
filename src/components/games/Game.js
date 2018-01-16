import React from 'react';
import { Link } from 'react-router-dom'

const Game = ({ gameId, gameName, gameStars, challengeId, playGoal }) => {

  gameStars = gameStars.filter((el) => el.challenge_id === challengeId)
  //print plays remaining, based on goal and completed
  let remainingStarsNum = playGoal - gameStars.length
  let remainingStarsHTML = []

  for (var i = 0; i < remainingStarsNum; i++) {
    remainingStarsHTML.push(
      <Link to={`/challenge/1/addplay/?challengeid=${challengeId}&gameid=${gameId}`} key={i}>
        <i key={i}
          data-challengeid={challengeId}
          data-gameid={gameId}
          className="material-icons"
          >
          star_border</i>
      </Link>
    )
  }

  //print recorded (DONE) plays
  //ONLY print stars that match the challenge id
  return (
    <section className="game-container">
      <h2 className="game-title text-center mtb-05">{ gameName }</h2>
      <div className="game-stars mtb-05">

        { gameStars.map ((el, i) => {
            return <i key={i} data-gameid={el.game_id} className="material-icons">star</i>
        })}
        { remainingStarsHTML }

      </div>
    </section>
  )
}

export default Game;
