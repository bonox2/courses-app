import { DELETE_COURSE } from "./actionTypes";
export function deleteCourse(course) {
  return {
    type: DELETE_COURSE,
    payload: course
  }
}