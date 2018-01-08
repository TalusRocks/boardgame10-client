import React from 'react';
import Game from './Game';

const GamesList = ({ gameList }) => {

  console.log(gameList, "gameList from gameList");
  gameList.map((el) => {
    console.log(el.name, "el.name");
  })
  return (
    <main className="main-content">
      { gameList.map((el, i) => {
        return <Game key={i} gameName={el.name}/>
      })}
    </main>
  )
}

export default GamesList;
