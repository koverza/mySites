import React from "react";
import CourseCard from "./components/CourseCard/CourseCard";
import "./courses.scss";

function Courses({ filterPosts }) {
  const course = filterPosts.map((post) => {
    return (
      <CourseCard
        key={post.id}
        id={post.id}
        title={post.title}
        description={post.description}
        authors={post.authors}
        duration={post.duration}
        creationDate={post.creationDate}
      />
    );
  });
  return (
    <div className="content">
      <div className="content-courses">{course}</div>
    </div>
  );
}

export default Courses;
