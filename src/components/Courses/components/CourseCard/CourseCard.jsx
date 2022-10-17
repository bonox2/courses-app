import "./CourseCard.css";
import Button from "../../../../common/Button/Button";
import { mockedAuthorsList } from "../../../../constants";
import pipeDuration from "../../../../helpers/pipeDuration";
import dateGenerator from "../../../../helpers/dateGenerator";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


export default function CourseCard({ course }) {
  const state = useSelector(state => state)
  console.log(state);
  const authorsNames = course.authors.map(
    (authorId) =>
      mockedAuthorsList.find((author) => authorId === author.id)?.name
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
        <Link to={`/courses/${course.id}`} className="btn">Show course</Link>
      </dl>
    </div>
  );
}
