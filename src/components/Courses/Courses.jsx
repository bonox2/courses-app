import { useEffect, useState } from "react";
import "./Courses.css";
import CourseCard from "./components/CourseCard/CourseCard";
import SearchBar from "./components/SearchBar/SearchBar";
import { Switch, Route, Link } from "react-router-dom";
import CreateCourse from "../CreateCourse/CreateCourse";
import CourseInfo from "../CourseInfo/CourseInfo";
import UpdateCourse from "../UpdateCourse/UpdateCourse";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../redux/courses/selectors";
import { getCoursesThunk } from "../../redux/courses/thunk";
import { getUserData } from "../../redux/user/selectors";

export default function Courses() {
  const dispatch = useDispatch();
  const courses = useSelector(getCourses);
  const userData = useSelector(getUserData);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    dispatch(getCoursesThunk());
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/courses">
          <div className="body_section">
            <div className="search_bar_main">
              <SearchBar setSearchQuery={setSearchQuery} />
              {userData.role === "admin" && (
                <Link to="/courses/add" className="btn">
                  Add new course
                </Link>
              )}
            </div>
            <div className="courses_list">
              {courses
                .filter((course) =>
                  `${course.id} ${course.title}`
                    .toLowerCase()
                    .includes(searchQuery)
                )
                .map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
            </div>
          </div>
        </Route>
        <Route path="/courses/add">
          <CreateCourse />
        </Route>
        <Route path="/courses/:courseId">
          <CourseInfo courses={courses} />
        </Route>
        <Route path="/courses/update/:courseId">
          <UpdateCourse courses={courses} />
        </Route>
      </Switch>
    </>
  );
}
