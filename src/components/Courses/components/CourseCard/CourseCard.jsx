import "./CourseCard.css";
import Button from "../../../../common/Button/Button";
import { mockedAuthorsList } from "../../../../constants";
import pipeDuration from "../../../../helpers/pipeDuration";

export default function CourseCard({ course }) {
  const authorsNames = course.authors.map(
    (authorId) =>
      mockedAuthorsList.find((author) => authorId === author.id).name
  ).join(",");
  return (
    <div className="course_card">
      <div className="course_info">
        <h2 className="course_name">{course.title}</h2>
        <p>{course.description}</p>
      </div>
      <dl className="course_details">
        <div className="parameter">
          <dt>Authors: </dt>
          <dd className="parameter_info"> {authorsNames}</dd>
        </div>
        <div className="parameter">
          <dt>Duration: </dt>
          <dd className="parameter_info" id="duration">{pipeDuration()} </dd>
        </div>
        <div className="parameter">
          <dt>Created: </dt>
          <dd className="parameter_info"> {course.creationDate}</dd>
        </div>
        <Button buttonText="Show course" />
      </dl>
    </div>
  );
}
