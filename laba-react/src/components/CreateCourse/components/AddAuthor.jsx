import React from "react";

function AddAuthor(props) {
  return (
    <div className="authors-block">
      <span className="author title">{props.name}</span>
      <button {...props} className="add-author button">{props.add}</button>
    </div>
  );
}

export default AddAuthor;
