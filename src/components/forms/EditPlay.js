import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { editStar, fetchChallenges } from '../../actions'


const EditPlay = (props) => {
  //NEED TO POPULATE THE COMMENTS WITH THIS STAR'S COMMENTS
  console.log(props);
  return (
    <div className="m-1">
      <p>edit page</p>
      <Link to='/challenge/1'>
        <div className="close-container">
          <i className="material-icons close">close</i>
        </div>
      </Link>
      <h3>Comments</h3>
      <form >
        <textarea name="comment" className="mtb-1" id="play-comments" rows="8"></textarea>
        <button className="button">Save</button>
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
