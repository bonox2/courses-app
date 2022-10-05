import { useEffect, useState } from 'react';
import './Courses.css';
import CourseCard from './components/CourseCard/CourseCard';
import SearchBar from './components/SearchBar/SearchBar';
import { Switch, Route, Link } from 'react-router-dom';
import CreateCourse from '../CreateCourse/CreateCourse';
import { mockedCoursesList } from '../../constants';
import CourseInfo from './components/CourseInfo/CourseInfo';

export default function Courses() {
  const [courses, setCourses] = useState(mockedCoursesList);
  const [searchQuery, setSearchQuery] = useState('');
  useEffect(() => {
    console.log(searchQuery);
  }, [searchQuery]);
  return (
    <>
      <Switch>
        <Route exact path="/courses">
          <div className="body_section">
            <div className="search_bar_main">
              <SearchBar setSearchQuery={setSearchQuery} />
              <Link to="/courses/add" className='btn'>Add new course</Link>
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
          <CreateCourse setCourses={setCourses}/>
        </Route>
        <Route path="/courses/:courseId">
          <CourseInfo courses={courses}/>
        </Route>
      </Switch>
    </>
  );
}
