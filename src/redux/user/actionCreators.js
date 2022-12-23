import { LOG_IN, LOG_OUT, SET_LOADING } from './actionTypes';


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
export function setLoadingUserData() {
  return {
    type: SET_LOADING
  }
}