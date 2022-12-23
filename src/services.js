import axios from 'axios';
const URL = 'http://localhost:4000';

const coursesApi = axios.create({
  baseURL: `${URL}/courses`,
  headers: {
    Authorization: window.localStorage.getItem('token')
  }
});
export function getCourses() {
  return coursesApi.get('/all');
}

export function createCourse(newCourse) {
  return coursesApi.post('/add', newCourse);
}

export function removeCourse(id) {
  return coursesApi.delete(`/${id}`);
}

const authorsApi = axios.create({
  baseURL: `${URL}/authors`,
  headers: {
    Authorization: window.localStorage.getItem('token')
  }
});
export function getAuthors() {
  return authorsApi.get('/all');
}

export function createdNewAuthor(newAuthor) {
  return authorsApi.post('/add', newAuthor);
}

const api = axios.create({
  baseURL: URL
});

export async function signUp(userData) {
  return api.post('/register', userData);
}
export async function signIn(userData) {
  return api.post('/login', userData);
}
export async function signOut() {
  return api.delete('/logout', {
    headers: {
      Authorization: window.localStorage.getItem('token')
    }
  });
}
export async function getUserData() {
  return api.get('/users/me', {
    headers: {
      Authorization: window.localStorage.getItem('token')
    }
  });
}

// export async function signUp(userData) {
//   const response = await fetch(URL + '/register', {
//     method: 'POST',
//     headers: {
//       'Content-type': 'application/json;charset=utf-8'
//     },
//     body: JSON.stringify(userData)
//   });
//   const json = await response.json();
//   if (!response.ok) {
//     return Promise.reject(json.errors[0]);
//   }
//   return json;
// }

// export async function getUserData() {
//   const response = await fetch(URL + '/users/me', {
//     headers: {
//       Authorization: window.localStorage.getItem('token')
//     }
//   });
//   if (!response.ok) {
//     return Promise.reject('Get data error');
//   }
//   const json = await response.json();
//   return json;
// }
