import { useEffect, useState } from 'react';
import './Courses.css';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { Switch, Route, Link } from 'react-router-dom';
import CreateCourse from '../CreateCourse/CreateCourse';
import CourseInfo from '../CourseInfo/CourseInfo';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses } from '../../redux/courses/selectors';
import { getCoursesThunk } from '../../redux/courses/thunk';
import { getUserData } from '../../redux/user/selectors';
import ProtectedRoute from '../../hoc/ProtectedRoute';


export default function Courses() {
  const dispatch = useDispatch();
  const courses = useSelector(getCourses);
  const userData = useSelector(getUserData);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(getCoursesThunk());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Switch>
        <Route exact path="/courses">
          <div className="body_section">
            <div className="search_bar_main">
              <SearchBar setSearchQuery={setSearchQuery} />
              {userData.role === 'admin' && (
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
        <Route exact path="/courses/add">
          <ProtectedRoute>
            <CreateCourse />
          </ProtectedRoute>
        </Route>
        <Route exact path="/courses/:courseId">
          <CourseInfo courses={courses} />
        </Route>
        <Route exact path="/courses/update/:courseId">
          <ProtectedRoute>
            <CreateCourse />
          </ProtectedRoute>
        </Route>
      </Switch>
    </>
  );
}
