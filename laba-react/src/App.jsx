import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import Input from "./components/SearchBar/Input";
// import SearchBar from "./components/SearchBar/SearchBar";
import AddCourse from "./components/SearchBar/AddCourse";
import Login from "./components/Header/components/Login/Login";
import Logout from "./components/Header/components/Logout/Logout";
import CreateCourse from "./components/CreateCourse/CreateCourse";
import "./App.scss";

function App() {
  // Поиск по названию курса
  const [title, setTitle] = useState("");

  // Список всех курсов
  const [posts, setPosts] = useState([
    {
      id: "js de5aaa59-90f5-4dbc-b8a9-aaf205c551ba",
      title: "JavaScript",
      description: `JAVASCRIPT Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic 3 / 11 typesetting, remaining essentially u nchanged.`,
      creationDate: "8/3/2021",
      duration: 160,
      authors: [
        "js 27cc3006-e93a-4748-8ca8-73d06aa93b6d",
        "js f762978b-61eb-4096-812bebde22838167",
      ],
    },
    {
      id: "ang b5630fdd-7bf7-4d39-b75a-2b5906fd0916",
      title: "Angular",
      description: `ANGULAR Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      creationDate: "10/11/2020",
      duration: 210,
      authors: [
        "ang df32994e-b23d-497c-9e4d-84e4dc02882f",
        "ang 095a1817-d45b-4ed7-9cf7-b2417bcbf748",
      ],
    },
    {
      id: "java b5630fdd-7bf7-4d39-b75a-2b5906fd0916",
      title: "Java",
      description: `JAVA Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      creationDate: "01.02.2018",
      duration: 310,
      authors: [
        " java df32994e-b23d-497c-9e4d-84e4dc02882f",
        " java 095a1817-d45b-4ed7-9cf7-b2417bcbf748",
      ],
    },
    {
      id: "asp b5630fdd-7bf7-4d39-b75a-2b5906fd0916",
      title: "ASP .NET",
      description: `ASP Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
      creationDate: "11.12.2020",
      duration: 410,
      authors: [
        " asp df32994e-b23d-497c-9e4d-84e4dc02882f",
        " asp 095a1817-d45b-4ed7-9cf7-b2417bcbf748",
      ],
    },
  ]);

  // Поиск курса без нажатия на кнопку (работает)
  const filterPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(title.toLowerCase());
  });

  // Поиск курса после нажатия на кнопку (НЕ МОГУ ПОНЯТЬ ПОЧЕМУ НЕ СРАБАТЫВАЕТ)
  function searchCourses() {
    if (title) {
      // console.log(title);
      const filterPosts = posts.filter((post) => {
        post.title.toLowerCase().includes(title.toLowerCase());
      });
      return filterPosts
    }
  }

  return (
    <BrowserRouter>
      <main className="main">
        <Header />
        <div className="content-wrap">
          <div className="content-top">
            <div className="search-block">
              <Input
                value={title}
                type="text"
                id="search"
                className="search-input input"
                placeholder="Enter course name..."
                onChange={(event) => setTitle(event.target.value)}
              />
              <label
                htmlFor="search"
                className="search-button button"
                onClick={searchCourses}
              >
                Search
              </label>
            </div>
            <AddCourse name={"Add course"} />
          </div>
          <Routes>
            {/* {как сделать по умолчанию отображение какого-то компонента} */}
            <Route
              path="courses"
              element={<Courses filterPosts={filterPosts} />}
            />
            <Route path="login" element={<Login name={"Login"} />} />
            <Route path="logout" element={<Logout name={"Logout"} />} />
            <Route path="create" element={<CreateCourse />} />
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
