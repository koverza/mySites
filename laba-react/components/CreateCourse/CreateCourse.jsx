import React from "react";
import '../CreateCourse/createCourse.scss'

function CreateCourse() {
  return (
    <div className="add-wrapper">
      <div className="add-top">
        <span className="add-title title">Title</span>
        <div className="add-title__block">
          <input type="text" id="add-title" className="add-input input" />
          <label htmlFor="add-title" className="update button">
            Update course
          </label>
        </div>
      </div>
      <div className="add-description">
        <span className="add-description__title title">Description</span>
        <textarea className="textarea input"></textarea>
      </div>
      <div className="add-main">
        <div className="add-left">
          <div className="add-authors">
            <h2 className="add-authors">Add Authors</h2>
            <div className="add-left__block">
              <p className="add-left__title title">Author name</p>
              <input
                type="text"
                className="create-author__input input"
                id="create-author"
              />
              <label htmlFor="create-author" className="create-author button">
                Create author
              </label>
            </div>
          </div>
          <div className="duration-block">
            <h2 className="duration-block__title">Duration</h2>
            <div className="duration-left__block">
              <p className="duration-left__title title">Duration</p>
              <input type="text" className="create-author__input input" />
            </div>
          </div>
          <div className="duration">
            <span className="duration-title">Duration</span>
            <div>
              <span className="duration-result">02:40</span>hours
            </div>
          </div>
        </div>
        <div className="add-right">
          <div className="authors-box">
            <h2 className="authors">Authors</h2>
            <div className="authors-block">
              <span className="author title">Alex Morano</span>
              <button className="add-author button">Add author</button>
            </div>
            <div className="authors-block">
              <span className="author title">Konstantin Lisicin</span>
              <button className="add-author button">Add author</button>
            </div>
            <div className="authors-block">
              <span className="author title">Olesya Miller</span>
              <button className="add-author button">Add author</button>
            </div>
          </div>
          <div className="course-authors">
            <h2 className="authors">Course authors</h2>
            <div className="authors-block">
              <span className="author title">Dave Simmonds</span>
              <button className="delete-author button">Delete author</button>
            </div>
            <div className="authors-block">
              <span className="author title">Mark Wallberg</span>
              <button className="delete-author button">Delete author</button>
            </div>
            <div className="authors-block">
              <span className="author title">Jane Simmonds</span>
              <button className="delete-author button">Delete author</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCourse;