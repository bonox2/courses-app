import { useEffect } from "react";
import "./Courses.css";
import CourseCard from "./components/CourseCard/CourseCard";
import { useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { Link } from "react-router-dom";



export default function Courses({ courses}) {
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);
  return (
    <>
      <div className="search_bar_main">
        <SearchBar setSearchQuery={setSearchQuery} />
        <Link to="/create-course">Add new course</Link>
      </div>
      <div className="courses_list">
        {courses
          .filter((course) =>
            `${course.id} ${course.title}`.toLowerCase().includes(searchQuery)
          )
          .map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
      </div>
    </>
  );
}
