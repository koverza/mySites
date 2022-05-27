import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Input from "./common/Input/Input";
import Label from "./common/Label/Label";
import Header from "./components/Header/Header";
import AddCourse from "./components/SearchBar/AddCourse";
import AppRouter from "./components/AppRouter/AppRouter";
import "./App.scss";

function App() {
  // Поиск по названию курса
  const [search, setSearch] = useState({title: ''});

  // Список всех курсов
  const [posts, setPosts] = useState([
    {
      id: "f762978b-61eb-4096-812b-ebde22838167",
      title: "Angular",
      description: "Angular description",
      creationDate: "10/11/2020",
      duration: 210,
      authors: [
       'пусто',
      ],
    },
    {
      id: "095a1817-d45b-4ed7-9cf7-b2417bcbf748",
      title: "Java",
      description: "Java description",
      creationDate: "01.02.2018",
      duration: 310,
      authors: [
        'пусто',
       ]
    },
    {
      id: "df32994e-b23d-497c-9e4d-84e4dc02882f",
      title: "ASP.NET",
      description: "ASP.NET description",
      creationDate: "11.12.2020",
      duration: 410,
      authors: [
        'пусто',
       ]
    },
    {
      id: "27cc3006-e93a-4748-8ca8-73d06aa93b6d",
      title: "Javascript",
      description: "Javascript description",
      creationDate: "10/11/2020",
      duration: 210,
      authors: [
        'пусто',
       ]
    },
  ]);

  // Поиск курса без нажатия на кнопку (работает)
  const filterPosts = posts.filter((post) => {
    return post.title.toLowerCase().includes(search.title.toLowerCase());
  });

  return (
    <BrowserRouter>
      <main className="main">
        <Header />
        <div className="content-wrap">
          <div className="content-top">
            <div className="search-block">
              <Input 
              value={search.title} 
              type="text" id="search" 
              className="search-input input" 
              placeholder="Enter course name..." 
              onChange={(event) => setSearch({...search, title: event.target.value})}/>
              <Label htmlFor="search" name={"Search"} />
            </div>
            <AddCourse name={"Add course"} />
          </div>
          <AppRouter filterPosts={filterPosts} />
        </div>
      </main>
    </BrowserRouter>
  );
}

export default App;
