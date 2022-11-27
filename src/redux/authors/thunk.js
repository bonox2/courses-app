import { addNewAuthor,setAuthors } from "./actionCreators"
import { createCourse, getAuthors } from '../../services';


export function getAuthorsThunk() {
    return async (dispatch) => {
        getAuthors()
        .then((response) => {
          dispatch(setAuthors(response.data.result));
        })
        .catch((error) => {
          alert('Getting courses error!');
          console.log(error);
        });
        const createdNewAuthor = await fetch()
        dispatch(addNewAuthor(createdNewAuthor))
    }
}
export function addNewAuthorThunk(newAuthor) {
    return (dispatch) => {
      addNewAuthor(newAuthor)
        .then((response) => {
          dispatch(addNewCourse(response.data.result));
        })
        .catch((error) => {
          alert('Creating course error!');
          console.log(error);
        });
    };
  }
export function addNewCourseThunk(course) {
  return (dispatch) => {
    createCourse(course)
      .then((response) => {
        dispatch(addNewCourse(response.data.result));
      })
      .catch((error) => {
        alert('Creating course error!');
        console.log(error);
      });
  };
}