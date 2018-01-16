import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addStar } from '../../actions'

class AddPlay extends Component {
  constructor(props){
    super(props)

    //get gameid and challengeid from URL params
    let fullURL = new URL(window.location)
    let searchParams = fullURL.searchParams
    this.challengeid = searchParams.get("challengeid")
    this.gameid = searchParams.get("gameid")

  }

  getComment = (e) => {
    // this.setState({...this.state, comments: e.target.value})
    e.preventDefault()
    // console.log(e.target.comment.value, "VALUE!!")
    let newStarPlay = {
      game_id: this.gameid,
      challenge_id: this.challengeid,
      comments: e.target.comment.value
    }
    this.props.addStar(newStarPlay)

  }

  render() {
    return (
      <div className="m-1">
        <Link to='/challenge/1'>
          <div className="close-container">
            <i className="material-icons close">close</i>
          </div>
        </Link>
        <h3>Comments</h3>
        <form onSubmit={ this.getComment }>
          <textarea name="comment" className="mtb-1" id="play-comments" rows="8">

            </textarea>
          <button className="button">Save</button>
        </form>
      </div>
    )
  }
}

// Here the state maps to the props...
const mapStateToProps = state => ({})
//and the dispatches.
const mapDispatchToProps = dispatch => bindActionCreators({
  addStar
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPlay)
