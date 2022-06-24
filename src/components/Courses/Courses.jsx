import CourseCard from "./components/CourseCard/CourseCard";
import { mockedCoursesList } from "../../constants";
import { useState } from "react";

export default function Courses() {
  const [courses, setCourses] = useState(mockedCoursesList);
  return (
    <div className="courses_list">
      {courses.map((course) => (
        <CourseCard key={course.id} course={course}/>
      ))}
    </div>
  );
}
