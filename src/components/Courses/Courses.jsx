import "./Courses.css";
import CourseCard from "./components/CourseCard/CourseCard";
import { mockedCoursesList } from "../../constants";
import { useState } from "react";
import Button from "../../common/Button/Button";
import SearchBar from "./components/SearchBar/SearchBar";

export default function Courses() {
  const [courses, setCourses] = useState(mockedCoursesList);
  return (
    <div>
      <div className="search_bar_main">
        <SearchBar/>
        <Button buttonText='Add new course'/>
      </div>
      <div className="courses_list">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course}/>
      ))}
    </div>
    </div>
  );
}
