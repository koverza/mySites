import React, { useState } from "react";
import Input from "../../../../common/Input/Input";
import Label from "../../../../common/Label/Label";

const AddAuthors = ({ setAddAuthor, addAuthors }) => {
  // Инпут где создается автор
  const [name, setName] = useState("");

  // Создать автора (DONE)
  function createAuthor(e) {
    e.preventDefault();
    let strArr = [];
    let nameArr = [...name];
    nameArr.forEach((name) => {
      let item = +name;
      if (Number(item)) {
        return;
      } else if (isNaN(item)) {
        strArr.push(name);
        const newAuthor = {
          id: Date.now(),
          name: strArr,
        };
        setAddAuthor([...addAuthors, newAuthor]);
        setName("");
      }
    });
  }
  return (
    <div className="add-authors">
      <h2 className="add-authors">Add Authors</h2>
      <div className="add-left__block">
        <p className="add-left__title title">Author name</p>
        <Input
          value={name}
          type="text"
          className="input"
          id="create-author"
          onChange={(event) => setName(event.target.value)}
        />
        <Label
          onClick={createAuthor}
          htmlFor="create-author"
          className="button"
          name="Create author"
        />
      </div>
    </div>
  );
};

export default AddAuthors;
