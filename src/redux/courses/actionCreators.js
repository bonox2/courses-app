import { ADD_COURSE} from "./actionTypes"


export function addNewCourse(course) {
  return {
    type: ADD_COURSE,
    payload: course
  }
}