import React from 'react';
import { bindActionCreators } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { editStar } from '../../actions'

function editComment(id, props){
  return async (e) => {
    e.preventDefault()

    let editedStarPlay = e.target.comment.value

    await props.editStar(id, editedStarPlay)

    props.history.push('/challenge/1')
  }
}

const EditPlay = (props) => {

  //get star id and comments from URL params
  let fullURL = new URL(window.location)
  let searchParams = fullURL.searchParams
  let starId = searchParams.get("starid")
  let starComments = searchParams.get("comments")

  return (
    <div className="m-1">
      <Link to='/challenge/1'>
        <div className="close-container">
          <i className="material-icons close">close</i>
        </div>
      </Link>
      <h3>Comments</h3>
      <form onSubmit={editComment(starId, props)}>
        <textarea name="comment" className="mtb-1" id="play-comments" rows="8" defaultValue={ starComments }></textarea>
        <button className="button delete">Delete Play</button>
        <button className="button mt-1">Update Play</button>
      </form>
    </div>
  )
}





// Here the state maps to the props...
const mapStateToProps = state => ({})
//and the dispatches.
const mapDispatchToProps = dispatch => bindActionCreators({
  editStar
}, dispatch)

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPlay))
