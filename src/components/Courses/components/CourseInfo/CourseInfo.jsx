import { useParams } from 'react-router-dom';
import Button from '../../../../common/Button/Button';
import { mockedAuthorsList } from "../../../../constants";


export default function CourseInfo({ courses }) {
  const { courseId } = useParams();
  const courseInfo = courses.find((course) => course.id === courseId);
  console.log(courseInfo);
  
  const authorsNames = courseInfo.authors.map(
    (authorId) =>
      mockedAuthorsList.find((author) => authorId === author.id)?.name
  ).join(", ");
  return (
  <>
      <Button buttonText="Back to courses" className="course_info_btn"></Button>
      <h2>{courseInfo.title}</h2>
      <p>{courseInfo.description}</p>
      <ul>
        <li><span>ID: </span>{courseInfo.id}</li>
        <li><span>Duration: </span>{courseInfo.duration}</li>
        <li><span>Created: </span>{courseInfo.creationDate}</li>
        <li><span>Authors: </span>{authorsNames}</li>
      </ul>
  </>
  )
}
