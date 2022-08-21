import { useEffect } from "react";
import "./Courses.css";
import CourseCard from "./components/CourseCard/CourseCard";
import { mockedCoursesList } from "../../constants";
import { useState } from "react";
import Button from "../../common/Button/Button";
import SearchBar from "./components/SearchBar/SearchBar";



export default function Courses({setIsHidden}) {
  const [courses, setCourses] = useState(mockedCoursesList);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);
  return (
    <>
      <div className="search_bar_main">
        <SearchBar setSearchQuery={setSearchQuery} />
        <Button buttonText="Add new course" onClick={() => setIsHidden(false)}/>
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
