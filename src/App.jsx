import './App.css';
import { useState } from 'react';
import Header from './components/Header/Header';
import Courses from './components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { mockedCoursesList } from './constants';

export default function App() {
  const [isHidden, setIsHidden] = useState(true);
  const [courses, setCourses] = useState(mockedCoursesList);
  return (
    <div className="App">
      <div className="container">
        <Header />
        <div className="body_section">
          {isHidden && <Courses setIsHidden={setIsHidden} courses={courses} />}
          {!isHidden && (
            <CreateCourse setIsHidden={setIsHidden} setCourses={setCourses} />
          )}
        </div>
      </div>
    </div>
  );
}
