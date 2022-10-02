import { useParams } from 'react-router-dom';

export default function CourseInfo({ courses }) {
  const { courseId } = useParams();
  const courseInfo = courses.find((course) => course.id === courseId);
  console.log(courseInfo);
  return <div>{courseInfo.title}</div>;
}
