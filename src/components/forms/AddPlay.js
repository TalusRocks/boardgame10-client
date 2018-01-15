import React from 'react';

const AddPlay = ({ }) => {

  return (
    <div className="m-1">
      <div className="close-container"><i className="material-icons close">close</i></div>
      <form>
        <textarea className="mtb-1" rows="8"></textarea>
        <button className="button">Save</button>
      </form>
    </div>
  )
}

export default AddPlay;
