import { useParams } from 'react-router-dom';
import { mockedAuthorsList } from "../../constants";
import './CourseInfo.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCourse } from '../../services';



export default function CourseInfo() {
  const { courseId } = useParams();
  const [courseInfo, setCourseInfo] = useState(null)
   
  useEffect(() => {
    if (courseId) {
       getCourse().then((response) => {
        setCourseInfo(response.data.result);
      });
    }
  }, [courseId])
  
  
  
  const authorsNames = courseInfo.authors.map(
    (authorId) =>
      mockedAuthorsList.find((author) => authorId === author.id)?.name
  ).join(" ");
  return (
  <>
      <section className="course_info_main">
        <div className="container">
          <Link to="/courses" className="course_info_btn" >&lt; Back to courses</Link>
          <h2 className='course_info_title'>{courseInfo.title}</h2>
          <div className="course_info_description_main">
            <p className='course_info_text'>{courseInfo.description}</p>
            <ul className='course_info_list'>
              <li><span>ID</span>: {courseInfo.id}</li>
              <li><span>Duration</span>: {courseInfo.duration}</li>
              <li><span>Created</span>: {courseInfo.creationDate}</li>
              <li><span>Authors</span>: {authorsNames}</li>
            </ul>
          </div>
        </div>
      </section>
  </>
  )
}
