import { LOG_IN, LOG_OUT } from './actionTypes';


export function setLogIn(userData) {
  return {
    type: LOG_IN,
    payload: userData
  }
}
export function setLogOut() {
  return {
    type: LOG_OUT
  }
}