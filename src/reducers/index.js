import { combineReducers } from 'redux'
//7. require it up
import {
        CHALLENGES_LOADED,
        ADD_STAR } from '../actions'

// function stars(state = { all: [] }, action) {
//   switch (action.type) {
//     case STARS_LOADED:
//       return {
//         ...state,
//         all: []
//       }
//     case ADD_STAR:
//       return {
//         ...state,
//         all: []
//       }
//     default:
//       return state
//   }
// }

//8. Actions coming by dispatch get up in ALLLL these functions, looking for where their action type matches.
//9. And you gotta have some empty intial state for it to grab onto the first time React renders
function challenges(state = { all: { games: [] } }, action) {

  switch (action.type) {
    //10. du nuhhhhh. Here's our action type. Make a copy of the current state, then overwrite with the data attached to the action
    case CHALLENGES_LOADED:
      return {
        ...state,
        all: action.allChallenges
      }
    default:
      return state
  }
}
//
// function addStar(state = { all: [] }, action) {
//   switch (action.type) {
//     case ADD_STAR:
//     //?? ********* need to define this state
//       return {
//         ...state,
//         all: action.stars
//       }
//     default:
//       return state
//   }
// }


//11. Export that shiz, then go back to App.js to see how it hooks up!
export default combineReducers({

  challenges
})
