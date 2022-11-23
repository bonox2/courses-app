import "./CourseCard.css";
import { mockedAuthorsList } from "../../../../constants";
import pipeDuration from "../../../../helpers/pipeDuration";
import dateGenerator from "../../../../helpers/dateGenerator";
import { Link } from "react-router-dom";
import Button from "../../../../common/Button/Button";
import { getAuthors } from "../../../../redux/authors/selectors";
import { useDispatch, useSelector } from 'react-redux';
import {deleteCourse} from '../../../../redux/courseFunctions/actionCreators';
import { getDelete } from "../../../../redux/courseFunctions/selectors";

export default function CourseCard({ course }) {
  const dispatch = useDispatch();
  const courseDelete = useSelector(getDelete);


  const allAuthors = useSelector(getAuthors);
  const authorsNames = course.authors.map(
    (authorId) =>
    allAuthors.find((author) => authorId === author.id)?.name
  ).join(",");
  return (
    <div className="course_card">
      <div className="course_general">
        <h2 className="course_name">{course.title}</h2>
        <p className="course_desc">{course.description}</p>
      </div>
      <dl className="course_details">
        <div className="parameter">
          <dt>Authors: </dt>
          <dd className="parameter_info"> {authorsNames}</dd>
        </div>
        <div className="parameter">
          <dt>Duration: </dt>
          <dd className="parameter_info" >{pipeDuration(course.duration)} </dd>
        </div>
        <div className="parameter">
          <dt>Created: </dt>
          <dd className="parameter_info"> {dateGenerator(course.creationDate)}</dd>
        </div>
        <div className="buttons_section">
          <Link to={`/courses/${course.id}`} className="btn">Show course</Link>
          <Link to="/courses/add" className="btn">&#128393;</Link>
          <Button buttonText="	&#128465;" onClick={() => {dispatch(deleteCourse())}}></Button>
        </div>
      </dl>
    </div>
  );
}
