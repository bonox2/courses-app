import './CreateCourse.css';
import Button from '../../common/Button/Button';
import Input from '../../common/Input/Input';
import { useState } from 'react';
import pipeDuration from '../../helpers/pipeDuration';
import { mockedAuthorsList } from '../../constants';

export default function CreateCourse() {
  const [duration, setDuration] = useState(0);
  const [allAuthors, setAllAuthors] = useState(mockedAuthorsList);
  const [courseAuthors, setCourseAuthors] = useState([]);
  const [newAuthor, setNewAuthor]= useState({
    id: '',
    name: ''
  })

  function createNewCourse(event) {
    event.preventDefault();
    console.log('Create new course');
  }


  function createNewAuthor(event) {
    event.preventDefault();
    setAllAuthors(prev => [...prev, newAuthor]);
    console.log(newAuthor);
  }
  function handleNewAuthor(e) {
    setNewAuthor((e.target.value))
  }
  

  function addAuthorToCourse(author) {
    setAllAuthors(allAuthors.filter(({ id }) => id !== author.id));
    setCourseAuthors(prev => [...prev, author]);
  }
  function deleteAuthorToCourse(author) {
    setCourseAuthors(courseAuthors.filter(({ id }) => id !== author.id));
    setAllAuthors(prev => [...prev, author]);
  }
  
  return (
    <div>
      <form className="create_coutse_general" onSubmit={createNewCourse}>
        <span>Title</span>
        <div className="create_course_input_btn">
          <Input
            placeHolderText="Enter title..."
            className="input create_course_input_short"
          />
          <Button buttonText="Create course" />
        </div>
        <span>Description</span>
        <textarea
          name="Create Course Description"
          className="create_course_description"
        >
          Enter description...
        </textarea>
      </form>
      <div className="create_coutse_details">
        <form className="create_course_part" onSubmit={createNewAuthor}>
          <h3>Add author</h3>
          <span className="create_course_subtitle">Author name</span>
          <Input
            placeHolderText="Enter author name..."
            className="input create_course_input_long"
            type="text"
            onChange={handleNewAuthor}
            name="name"
          />
          <Button buttonText="Create author" />
        </form>



        <div className="create_course_part">
          <h3>Authors</h3>
          {allAuthors.map((author) => (
            <div key={author.id} className="create_course_author_add">
              <div className="create_course_name">{author.name}</div>
              <Button buttonText="Add author" onClick={() => addAuthorToCourse(author)}/>
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
              <Button buttonText="Delete author" onClick={() => deleteAuthorToCourse(author)}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
