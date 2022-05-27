import React, { useState } from "react";
import PotentialAuthor from "./components/PotentialAuthor";
import DeleteAuthor from "./components/DeleteAuthor";
import Duration from "./components/Duration/Duration";
import AddAuthors from "./components/AddAuthors/AddAuthors";
import Title from "./components/Title/Title";
import Description from "./components/Description/Description";
import Empty from "../../common/Empty/Empty";
import "../CreateCourse/createCourse.scss";

function CreateCourse({ visible, setVisible }) {
  // Потенциальные авторы
  const [potentialAuthors, setPotentialAuthors] = useState([
    { id: 1, name: "Alex Morano", add: false },
    { id: 2, name: "Konstantin Lisicin", add: false },
    { id: 3, name: "Olesya Miller", add: false },
  ]);

  // Добавить потенциального автора
  function addToPotentialAuthors(id) {
    potentialAuthors.map((item) => {
      if (item.id === id) {
        item.add = true;
        let obj = {
          id: Date.now(),
          name: item.name,
          delete: false,
        };
        setCourseAuthor([...courseAuthors, obj]);
        if (item.add === true) {
          let rem = potentialAuthors.filter((item) => {
            return item.add !== true;
          });
          setPotentialAuthors(rem);
        }
      }
    });
  }

  // Список участвующих авторов
  const [courseAuthors, setCourseAuthor] = useState([
    // { id: 1, name: "Dave Simmonds", delete: false },
    // { id: 2, name: "Mark Wallberg", delete: false },
    // { id: 3, name: "Jane Simmonds", delete: false },
  ]);

  // Удалить автора (DONE)
  function remove(id) {
    let arr = [...courseAuthors];
    let rem = arr.filter((item) => {
      return item.id !== id;
    });
    setCourseAuthor(rem);
  }

  // Добавить новый курс в список (НЕ ПОНИМАЮ КАК СДЕЛАТЬ ЧТОБЫ РАБОТАЛО ДОБАВЛЕНИЕ НОВОГО КУРСА)
  // function addCourse(e) {
  //   e.preventDefault();
  //   if (description && title) {
  //     let newCourse = {
  //       id: Date.now(),
  //       title: title,
  //       description: description,
  //       creationDate: new Date(),
  //       duration: duration,
  //       authors: ["пусто", "пусто"],
  //     };
  //     setPosts([...props.posts, newCourse]);
  //     setTitle("");
  //     setDescription("");
  //   }
  // }

  return (
    <div className="add-wrapper">
      {visible === true ? (
        <div>
          <Title />
          <Description />

          <div className="add-main">
            <div className="add-left">
              <AddAuthors
                addAuthors={potentialAuthors}
                setAddAuthor={setPotentialAuthors}
              />
              <Duration />
            </div>

            <div className="add-right">
              <div className="authors-box">
                <h2 className="authors">Authors</h2>
                {potentialAuthors.length ? (
                  potentialAuthors.map((addAuthor) => {
                    return (
                      <PotentialAuthor
                        key={addAuthor.id}
                        id={addAuthor.id}
                        add={addAuthor.add}
                        name={addAuthor.name}
                        addToPotentialAuthors={addToPotentialAuthors}
                      />
                    );
                  })
                ) : (
                  <Empty />
                )}
              </div>

              <div className="course-authors">
                <h2 className="authors">Course authors</h2>
                {courseAuthors.length ? (
                  courseAuthors.map((courseAuthor) => {
                    return (
                      <DeleteAuthor
                        key={courseAuthor.id}
                        id={courseAuthor.id}
                        delete={courseAuthor.delete}
                        name={courseAuthor.name}
                        remove={remove}
                      />
                    );
                  })
                ) : (
                  <Empty />
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>Скрыто</div>
      )}
    </div>
  );
}

export default CreateCourse;
