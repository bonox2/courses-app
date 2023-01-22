import './CreateCourse.css';
import Input from '../../common/Input/Input';
import { useState, useMemo, useEffect } from 'react';
import pipeDuration from '../../helpers/pipeDuration';
import { useHistory, useParams } from 'react-router-dom';
import Button from '../../common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthors } from '../../redux/authors/selectors';
import { addNewCourseThunk } from '../../redux/courses/thunk';
import { addNewAuthorThunk, getAuthorsThunk } from '../../redux/authors/thunk';

export default function CreateCourse({ courses }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [duration, setDuration] = useState(0);
  const [courseAuthors, setCourseAuthors] = useState([]);
  const allAuthors = useSelector(getAuthors);
  const [courseInfo, setCourseInfo] = useState(null)
  const { courseId } = useParams();
  const [title, setTitle] = useState('')

  useEffect(() => {
    if (courseId) {
      //make a request
      // setCourseInfo() //response
    }
  }, [courseId])


  useEffect(() => {
    if(courseInfo){
      //fill inputs
      // setTitle(courseInfo.title)
    }
  }, [courseInfo])
  
  

  const availableAuthors = useMemo(
    () =>
      allAuthors.filter((author) => {
        return !courseAuthors.find(
          (courseAuthor) => courseAuthor.id === author.id
        );
      }),
    [allAuthors, courseAuthors]
  );

  useEffect(() => {
    dispatch(getAuthorsThunk());
  }, []);

  function createNewCourse(event) {
    event.preventDefault();
    if (courseAuthors.length === 0) {
      alert('Please select at least one author');
      return;
    }
    if (duration === 0) {
      alert('Please enter duration');
      return;
    }
    if(!courseInfo){
      const newCourse = {
        title,
        description: event.target.description.value.trim(),
        creationDate: new Date().toLocaleDateString('en'),
        duration,
        authors: courseAuthors.map((courseAuthor) => courseAuthor.id)
      };
      console.log('Create new course', newCourse);
      dispatch(addNewCourseThunk(newCourse));
    } else{
      const updateCourseData = {
        title, 
        //...
      }
      // dispatch(updateCourseThunk(courseInfo.id, updateCourseData))
    }
    history.push('/courses');
  }

  function createNewAuthor(event) {
    event.preventDefault();
    const newAuthor = {
      id: `${Date.now()}`,
      name: event.target.name.value.trim()
    };
    dispatch(addNewAuthorThunk(newAuthor));
    console.log(newAuthor);
    event.target.reset();
  }

  function addAuthorToCourse(author) {
    setCourseAuthors((prev) => [...prev, author]);
  }
  function deleteAuthorFromCourse(author) {
    setCourseAuthors(courseAuthors.filter(({ id }) => id !== author.id));
  }

  return (
    <div>
      <form className="create_course_general" onSubmit={createNewCourse}>
        <span>Title</span>
        <div className="create_course_input_btn">
          <Input
            placeHolderText="asdasdasdasda"
            className="input create_course_input_short"
            name="title"
            required
            value={title}
            onChange={e => setTitle(e.target.value().trim())}
          />
          <Button buttonText="Create course" type="submit"></Button>
        </div>
        <span>Description</span>
        <textarea
          placeholder="Enter description..."
          className="create_course_description"
          name="description"
          required></textarea>
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
          {availableAuthors.map((author) => (
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
          {courseAuthors.length === 0 ? (
            <span>Author list is empty</span>
          ) : (
            courseAuthors.map((author) => (
              <div key={author.id} className="create_course_author_add">
                <div className="create_course_name">{author.name}</div>
                <Button
                  buttonText="Delete author"
                  onClick={() => deleteAuthorFromCourse(author)}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
