import { ADD_COURSE, REMOVE_COURSE, SET_COURSES,UPDATE_COURSE} from "./actionTypes"

export function setCourses(courses) {
  return {
    type: SET_COURSES,
    payload: courses
  } 
}
export function addNewCourse(course) {
  return {
    type: ADD_COURSE,
    payload: course
  }
}
export function deleteCourse(courseId) {
  return {
    type: REMOVE_COURSE,
    payload: courseId
  }
}
export function updateCourse(updatedCourse) {
  return {
    type: UPDATE_COURSE,
    payload: updatedCourse
  }
}