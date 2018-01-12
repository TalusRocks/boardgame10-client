import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { createItem } from '../../actions'

const GameStar = ({}) => {
  return (
    <i className="material-icons">star_border</i>
  )
}

const mapStateToProps = state => ({
  stars: state.stars
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameStar)
