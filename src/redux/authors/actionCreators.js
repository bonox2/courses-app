import { ADD_AUTHOR } from "./actionTypes";
import { ADD_LIST_AUTHOR } from "./actionTypes";
import { REMOVE_LIST_AUTHOR } from "./actionTypes";
import { ADD_COURSE_AUTHOR } from "./actionTypes";
import { REMOVE_COURSE_AUTHOR } from "./actionTypes";

export function addNewAuthor(newAuthor) {
  return {
    type: ADD_AUTHOR,
    payload: newAuthor
  }
}
export function addListAuthor(author) {
  return{
    type: ADD_LIST_AUTHOR,
    payload: author
  }
}
export function deleteListAuthor(author) {
  return {
    type: REMOVE_LIST_AUTHOR,
    payload: author
  };
}
export function addCourseAuthor(author) {
  return{
    type: ADD_COURSE_AUTHOR,
    payload: author
  }
}
export function deleteCourseAuthor(author) {
  return {
    type: REMOVE_COURSE_AUTHOR,
    payload: author
  };
}