import axios from "axios";
const URL = 'http://localhost:4000';

const coursesApi  = axios.create({
  baseURL: `${URL}/courses`,
  headers:{
    Authorization: window.localStorage.getItem('token')
  }
})
export function getCourses() {
  return coursesApi.get('/all')
}
 
export function createCourse(newCourse) {
  return coursesApi.post('/add', newCourse)
}

export function removeCourse(id) {
  return coursesApi.delete(`/${id}`)
}


const authorsApi  = axios.create({
  baseURL: `${URL}/authors`,
  headers:{
    Authorization: window.localStorage.getItem('token')
  }
})
export function getAuthors() {
  return authorsApi.get('/all')
}
 
export function addNewAuthor(newAuthor) {
  return authorsApi.post('/add', newAuthor)
}









export async function signIn(userData) {
  const response = await fetch(URL + '/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userData)
  });
  if (!response.ok) {
    return Promise.reject('Auth error');
  }
  const json = await response.json();
  window.localStorage.setItem('token', json.result);
  return json;
}
export async function signUp(userData) {
  const response = await fetch(URL + '/register', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userData)
  });
  const json = await response.json();
  if (!response.ok) {
    return Promise.reject(json.errors[0]);
  }
  return json;
}
export async function signOut() {
  const response = await fetch(URL + '/logout', {
    method: 'DELETE',
    headers: {
      Authorization: window.localStorage.getItem('token')
    }
  });
  if (!response.ok) {
    return Promise.reject('Logout error');
  }
  window.localStorage.removeItem('token');
  return true;
}

export async function getUserData() {
  const response = await fetch(URL + '/users/me', {
    headers: {
      Authorization: window.localStorage.getItem('token')
    }
  });
  if (!response.ok) {
    return Promise.reject('Get data error');
  }
  const json = await response.json();
  return json;
}
