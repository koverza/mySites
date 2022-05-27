import React from "react";

function PotentialAuthor({name, id, addToPotentialAuthors}) {
  return (
    <div className="authors-block">
      <span className="author title">{name}</span>
      <button onClick={() => addToPotentialAuthors(id)} className="add-author button">Add author</button>
    </div>
  );
}

export default PotentialAuthor;
