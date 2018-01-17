import { combineReducers } from 'redux'
//7. require it up
import { CHALLENGES_LOADED } from '../actions'


//8. Actions coming by dispatch get IN these functions, looking for where their action type matches.
//9. You need an empty intial state for it to grab onto for the first time React renders
function challenges(state = { all: { games: [] } }, action) {

  switch (action.type) {
    //10. Here's our action type. Make a copy of the current state, then overwrite with the data attached to the action
    case CHALLENGES_LOADED:
      return {
        ...state,
        all: action.allChallenges
      }
    default:
      return state
  }
}

//11. Export it, then go back to App.js to see how it hooks up!
export default combineReducers({
  challenges
})
