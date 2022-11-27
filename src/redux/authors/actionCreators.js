import { ADD_AUTHOR, SET_AUTHORS } from "./actionTypes";

export function setAuthors(authors) {
  return {
    type: SET_AUTHORS,
    payload: authors
  }
}
export function addNewAuthor(newAuthor) {
  return {
    type: ADD_AUTHOR,
    payload: newAuthor
  }
}