import React from 'react';
import { Link } from 'react-router-dom'

const AddPlay = ({ }) => {
//how can this form remember what star was clicked?
//pass along with Link? Props? get the State?

  return (
    <div className="m-1">
      <Link to='/challenge/1'>
        <div className="close-container">
          <i className="material-icons close">close</i>
        </div>
      </Link>
      <h3>Comments</h3>
      <form>
        <textarea className="mtb-1" rows="8"></textarea>
        <button className="button">Save</button>
      </form>
    </div>
  )
}

export default AddPlay;
