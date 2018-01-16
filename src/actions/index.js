//2. Declare your action type names here
export const CHALLENGES_LOADED = 'CHALLENGES_LOADED'
export const ADD_STAR = 'ADD_STAR'

//3. This is what we called to load page from src/index.js
export function fetchChallenges() {
  //4. hold on a sec while I go get some data
  return async (dispatch) => {
    const response = await fetch('http://localhost:3000/challenge/1')
    const json = await response.json()
    //ok cool, now 5. FIRE THE DISPATCH TO THE REDUCERS!
    dispatch({
      //6. sending the action type and the (optional) data
      //go to the reducer folder/file
      type: CHALLENGES_LOADED,
      allChallenges: json.challenge
    })
  }
}

//this action handles ADDING stars (plays) only; use fetchChallenges above to re-render 
export function addStar(newStarPlay) {

  return async (dispatch) => {
    const response = await fetch('http://localhost:3000/challenge/1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify( newStarPlay )
    })
    const json = await response.json()

    dispatch({
      type: ADD_STAR
    })
  }

}
