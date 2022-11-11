import { ADD_AUTHOR } from "./actionTypes";
export function addNewAuthor(newAuthor) {
  return {
    type: ADD_AUTHOR,
    payload: newAuthor
  }
}