import React from "react";

function DeleteAuthor({name, id, remove}) { 
  return (
    <div className="authors-block">
      <span className="author title">{name}</span>
      <button onClick={() => remove(id)} className="add-author button">Delete author</button>
    </div>
  );
}

export default DeleteAuthor;