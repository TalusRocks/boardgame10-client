import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addStar, fetchChallenges } from '../../actions'

function getComment(newStarPlay, props){
  return async (e) => {
    e.preventDefault()
    newStarPlay.comments = e.target.comment.value
    await props.addStar(newStarPlay)
    //if
    await props.fetchChallenges(newStarPlay)
    props.history.push('/challenge/1')
  }
}

const AddPlay = (props) => {

    //get gameid and challengeid from URL params
    let fullURL = new URL(window.location)
    let searchParams = fullURL.searchParams
    let challengeid = searchParams.get("challengeid")
    let gameid = searchParams.get("gameid")

    let newStarPlay = {
      game_id: gameid,
      challenge_id: challengeid
    }

    return (
      <div className="m-1">
        <Link to='/challenge/1'>
          <div className="close-container">
            <i className="material-icons close">close</i>
          </div>
        </Link>
        <h3>Comments</h3>
        <form onSubmit={getComment(newStarPlay, props)}>
          <textarea name="comment" className="mtb-1" id="play-comments" rows="8">

            </textarea>

          <button className="button">Save</button>

        </form>
      </div>
    )
}

// Here the state maps to the props...
const mapStateToProps = state => ({})
//and the dispatches.
const mapDispatchToProps = dispatch => bindActionCreators({
  addStar,
  fetchChallenges
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPlay))
