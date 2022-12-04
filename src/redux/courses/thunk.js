import { createCourse, getCourses, removeCourse } from '../../services';
import { addNewCourse, setCourses, deleteCourse } from './actionCreators';

export function getCoursesThunk() {
    return (dispatch) => {
        getCourses()
        .then((response) => {
          dispatch(setCourses(response.data.result));
        })
        .catch((error) => {
          alert('Getting courses error!');
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
export function removeCourseThunk(id) {
  return (dispatch) => {
    removeCourse(id)
      .then(() => {
        dispatch(deleteCourse(id));
      })
      .catch((error) => {
        alert('Deleting course error!');
        console.log(error);
      });
  };
}
