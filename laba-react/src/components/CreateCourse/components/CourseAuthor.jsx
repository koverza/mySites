import React from "react";

function DeleteAuthor(props) {
  return (
    <div className="authors-block">
      <span className="author title">{props.name}</span>
      <button {...props} className="add-author button">{props.remove}</button>
    </div>
  );
}

export default DeleteAuthor;