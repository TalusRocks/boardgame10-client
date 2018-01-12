//2. Declare your action type name here
export const STARS_LOADED = 'STARS_LOADED'
export const CHALLENGES_LOADED = 'CHALLENGES_LOADED'

//3. This is what we called 
export function fetchStars() {
  //4. hold on a sec while I go get some data
  return async (dispatch) => {
    const response = await fetch('http://localhost:3000/challenge/1/stars')
    const json = await response.json()
    //ok cool, now 5. FIRE THE DISPATCH TO THE REDUCERS!
    dispatch({
      //6. sending the action type and the (optional) data
      type: STARS_LOADED,
      stars: json.stars
    })
  }
}

export function fetchChallenges() {
  return async (dispatch) => {
    const response = await fetch('http://localhost:3000/challenge/1')
    const json = await response.json()
    dispatch({
      type: CHALLENGES_LOADED,
      allChallenges: json.challenge
    })
  }
}
