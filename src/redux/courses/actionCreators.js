import { ADD_COURSE, REMOVE_COURSE, SET_COURSES} from "./actionTypes"



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
export function removeCourse(courseId) {
  return {
    type: REMOVE_COURSE,
    payload: courseId
  }
}