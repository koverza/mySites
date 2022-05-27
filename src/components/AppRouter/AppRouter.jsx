import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "../Courses/Courses";
import Login from "../Header/components/Login/Login";
import Registration from "../Header/components/Registration/Registration";
import CreateCourse from "../CreateCourse/CreateCourse";
import CourseInfo from "../CreateCourse/components/CourseInfo/CourseInfo";
import Label from "../../common/Label/Label";

const AppRouter = (props) => {

  const [page, setPage] = useState(true);

  // function createCourse() {
  //   // setVisible(false);
  //   setPage(false);
  // }

  return (
    <div>
      {/* <Label
        htmlFor="add-title"
        className="button"
        name="Update course"
        onClick={createCourse}
      /> */}
      {/* {page
      ? <CreateCourse visible={page} setVisible={setPage} />
      : <Courses filterPosts={props.filterPosts} />
      } */}
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route
          path="courses"
          element={<Courses filterPosts={props.filterPosts} />}
        />
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
        <Route
          path="create"
          element={<CreateCourse visible={page} setVisible={setPage} />}
        />
        <Route path="add" element={<CourseInfo />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
