import React, { useState } from "react";
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Header from "./components/Header/Header";
import Courses from "./components/Courses/Courses";
import SearchBar from "./components/SearchBar/SearchBar";
import AddCourse from "./components/SearchBar/AddCourse";
import Login from './components/Header/components/Login/Login';
import Logout from './components/Header/components/Logout/Logout';
import CreateCourse from "./components/CreateCourse/CreateCourse";
import "./App.scss";

function App() {
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
  ]);
  const [title, setTitle] = useState("");

  // function addPost(e) {
  //   e.preventDefault();
  //   const newPost = {
  //     id: Date.now(),
  //     title,
  //   };
  //   setPosts([...posts, newPost]);
  //   setTitle("");
  // }

  return (
    <BrowserRouter>
      <main className="main">
        <Header />
        <div className="content-wrap">
          <div className="content-top">
            <SearchBar onChange={(event) => setTitle(event.target.value)} />
            <AddCourse name={"Add course"} />
          </div>
          <Routes>
            {/* <Courses posts={posts} /> */}
            <Route path="courses" element={<Courses posts={posts} />} />
            <Route path="login" element={<Login name={'Login'} />} />
            <Route path='logout' element={<Logout name={'Logout'}/>}/>
            <Route path='create' element={<CreateCourse />}/>
          </Routes>
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
