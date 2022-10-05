import { useParams } from 'react-router-dom';
import Button from '../../../../common/Button/Button';
import { mockedAuthorsList } from "../../../../constants";
import './CourseInfo.css';
import { Link } from 'react-router-dom';



export default function CourseInfo({ courses }) {
  const { courseId } = useParams();
  const courseInfo = courses.find((course) => course.id === courseId);
  console.log(courseInfo);
  
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
