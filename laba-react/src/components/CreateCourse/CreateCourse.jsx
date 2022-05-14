import React, { useState } from "react";
import AddAuthor from "./components/AddAuthor";
import CourseAuthor from "./components/CourseAuthor";
import "../CreateCourse/createCourse.scss";

function CreateCourse({setPosts, ...props}) {
  // Название курса
  const [title, setTitle] = useState("");

  // Описание курса
  const [description, setDescription] = useState("");

  // Инпут где создается автор
  const [name, setName] = useState("");

  // Продолжительность курса
  const [duration, setDuration] = useState("");

  // Функция которая переводит число в продолжительность курса
  function durationTime() {
    if (duration) {
      let hours = Math.floor(duration / 60);
      hours += hours < 0 ? 1 : 0;
      let m2 = Math.abs(duration % 60);
      m2 = m2 < 10 ? "0" + m2 : m2;
      return hours + ":" + m2;
    } else {
      return "00:00";
    }
  }

  // Создать автора
  function createAuthor(e) {
    e.preventDefault();
    const newAuthor = {
      id: Date.now(),
      name,
    };
    setAddAuthor([...addAuthors, newAuthor]);
    setName("");
  }

  // Потенциальные авторы
  const [addAuthors, setAddAuthor] = useState([
    { id: 1, name: "Alex Morano" },
    { id: 2, name: "Konstantin Lisicin" },
    { id: 3, name: "Olesya Miller" },
  ]);
  let addAuthorElement = addAuthors.map((addAuthor) => {
    return (
      <AddAuthor
        name={addAuthor.name}
        add={"Add author"}
        onClick={addToAuthors}
      />
    );
  });

  // ==================================== //

  // Список участвующих авторов
  const [courseAuthors, setCourseAuthor] = useState([
    { id: 1, name: "Dave Simmonds" },
    { id: 2, name: "Mark Wallberg" },
    { id: 3, name: "Jane Simmonds" },
  ]);
  let courseAuthorElement = courseAuthors.map((courseAuthor) => {
    return (
      <CourseAuthor
        name={courseAuthor.name}
        remove={"Delete author"}
        onClick={remove}
      />
    );
  });

  // Удалить автора
  function remove(i) {
    let arr = [...courseAuthors];
    arr.splice(i, 1);
    setCourseAuthor(arr);
  }

  // Добавить автора (ПОЧЕМУ-ТО ДОБАВЛЯЕТСЯ ПОСЛЕДНИЙ АВТОР ТОЛЬКО, КАК ИСПРАВИТЬ)
  function addToAuthors() {
    addAuthors.map((author) => {
      setCourseAuthor([...courseAuthors, author]);
    });
  }

  // ==================================== //

  // Добавить новый курс в список (НЕ ПОНИМАЮ КАК СДЕЛАТЬ ЧТОБЫ РАБОТАЛО ДОБАВЛЕНИЕ НОВОГО КУРСА)
  function addCourse(e) {
    e.preventDefault()
    if(description && title) {
      let newCourse = {
        id: Date.now(),
        title: title,
        description: description,
        creationDate: new Date(),
        duration: duration,
        authors: [
          "пусто",
          "пусто",
        ],
      }
      setPosts([...props.posts, newCourse])
      setTitle('')
      setDescription('')
    }
  }


  return (
    <div className="add-wrapper">
      <div className="add-top">
        <span className="add-title title">Title</span>
        <div className="add-title__block">
          <input 
          value={title} 
          type="text" 
          id="add-title" 
          className="add-input input"
          onChange={(event) => setTitle(event.target.value)}
          />
          <label htmlFor="add-title" className="update button" onClick={addCourse}>
            Update course
          </label>
        </div>
      </div>
      <div className="add-description">
        <span className="add-description__title title">Description</span>
        <textarea 
        value={description} 
        className="textarea input"
        onChange={(event) => setDescription(event.target.value)}
        ></textarea>
      </div>
      <div className="add-main">
        <div className="add-left">
          <div className="add-authors">
            <h2 className="add-authors">Add Authors</h2>
            <div className="add-left__block">
              <p className="add-left__title title">Author name</p>
              <input
                value={name}
                type="text"
                className="create-author__input input"
                id="create-author"
                onChange={(event) => setName(event.target.value)}
              />
              <label
                onClick={createAuthor}
                htmlFor="create-author"
                className="create-author button"
              >
                Create author
              </label>
            </div>
          </div>
          <div className="duration-block">
            <h2 className="duration-block__title">Duration</h2>
            <div className="duration-left__block">
              <p className="duration-left__title title">Duration</p>
              <input
                value={duration}
                type="text"
                className="create-author__input duration-input input"
                onChange={(event) => setDuration(event.target.value)}
              />
            </div>
          </div>
          <div className="duration">
            <span className="duration-title">Duration</span>
            <div>
              <span className="duration-result">{durationTime()}</span>hours
            </div>
          </div>
        </div>

        <div className="add-right">
          <div className="authors-box">
            <h2 className="authors">Authors</h2>
            {addAuthorElement}
          </div>

          <div className="course-authors">
            <h2 className="authors">Course authors</h2>
            {courseAuthorElement}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;
