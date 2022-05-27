import React, { useState } from "react";

const Description = () => {
  // Описание курса
  const [description, setDescription] = useState("");
  
  return (
    <div className="add-description">
      <span className="add-description__title title">Description</span>
      <textarea
        value={description}
        className="input"
        onChange={(event) => setDescription(event.target.value)}
      ></textarea>
    </div>
  );
};

export default Description;
