import './CreateCourse.css';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { useState } from 'react';
import pipeDuration from '../../helpers/pipeDuration';
import { mockedAuthorsList } from '../../constants';
import { Link } from "react-router-dom";

export default function CreateCourse({setIsHidden, setCourses}) {
  const [duration, setDuration] = useState(0);
  const [allAuthors, setAllAuthors] = useState(mockedAuthorsList);
  const [courseAuthors, setCourseAuthors] = useState([]);

  function createNewCourse(event) {
    event.preventDefault();
    if (courseAuthors.length === 0) {
      alert("Please select at least one author");
      return;
    }
    if (duration === 0) {
      alert("Please enter duration");
      return;
    }
    const newCourse = {
      id: `${Date.now()}`,
      title: event.target.title.value.trim(),
      description: event.target.description.value.trim(),
      creationDate: new Date().toLocaleDateString(),
      duration,
      authors: courseAuthors.map(courseAuthor => courseAuthor.id),
    }
    console.log('Create new course', newCourse);
    setCourses(p => [...p, newCourse]);
    setIsHidden(true)
  }

  function createNewAuthor(event) {
    event.preventDefault();
    const newAuthor = {
      id: `${Date.now()}`,
      name: event.target.name.value.trim(),
    };
    setAllAuthors((prev) => [...prev, newAuthor]);
    console.log(newAuthor);
    event.target.reset();
  }

  function addAuthorToCourse(author) {
    setAllAuthors(allAuthors.filter(({ id }) => id !== author.id));
    setCourseAuthors((prev) => [...prev, author]);
  }
  function deleteAuthorToCourse(author) {
    setCourseAuthors(courseAuthors.filter(({ id }) => id !== author.id));
    setAllAuthors((prev) => [...prev, author]);
  }

  return (
    <div>
      <form className="create_coutse_general" onSubmit={createNewCourse}>
        <span>Title</span>
        <div className="create_course_input_btn">
          <Input
            placeHolderText="Enter title..."
            className="input create_course_input_short"
            name="title"
            required
          />
          <Link to="/">Create course</Link>
        </div>
        <span>Description</span>
        <textarea
          placeholder="Enter description..."
          className="create_course_description"
          name="description"
          required
        >
        </textarea>
      </form>
      <div className="create_course_details">
        <form className="create_course_part" onSubmit={createNewAuthor}>
          <h3>Add author</h3>
          <span className="create_course_subtitle">Author name</span>
          <Input
            placeHolderText="Enter author name..."
            className="input create_course_input_long"
            type="text"
            name="name"
          />
          <Button buttonText="Create author" type="submit" />
        </form>

        <div className="create_course_part">
          <h3>Authors</h3>
          {allAuthors.map((author) => (
            <div key={author.id} className="create_course_author_add">
              <div className="create_course_name">{author.name}</div>
              <Button
                buttonText="Add author"
                onClick={() => addAuthorToCourse(author)}
              />
            </div>
          ))}
        </div>

        <div className="create_course_part">
          <h3>Duration</h3>
          <span className="create_course_subtitle">Duration</span>
          <Input
            placeHolderText="Enter duration in minutes..."
            className="input create_course_input_long"
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
          <div className="duration_time">
            Duration: {pipeDuration(duration)}
          </div>
        </div>

        <div className="create_course_part">
          <h3>Course authors</h3>
          {/* <span>Author list is empty</span> */}
          {courseAuthors.map((author) => (
            <div key={author.id} className="create_course_author_add">
              <div className="create_course_name">{author.name}</div>
              <Button
                buttonText="Delete author"
                onClick={() => deleteAuthorToCourse(author)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
