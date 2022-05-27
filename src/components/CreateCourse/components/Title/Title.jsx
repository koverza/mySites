import React, { useState } from "react";
import Input from "../../../../common/Input/Input";
import Label from "../../../../common/Label/Label";

const Title = () => {
  // Название курса
  const [title, setTitle] = useState("");
  return (
    <div className="add-top">
      <span className="add-title title">Title</span>
      <div className="add-title__block">
        <Input
          value={title}
          type="text"
          id="add-title"
          className="input"
          onChange={(event) => setTitle(event.target.value)}
        />
      {/* <Label
          htmlFor="add-title"
          className="button"
          name="Update course"
          onClick={createCourse}
        /> */}
      </div>
    </div>
  );
};

export default Title;
