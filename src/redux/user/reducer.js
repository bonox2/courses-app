import { LOG_IN, LOG_OUT } from './actionTypes';

const initialState = {
  isAuth: false, // default value - false. After success login - true
  name: '', // default value - empty string. After success login - name of user
  email: '', // default value - empty string. After success login - email of user
  token: window.localStorage.getItem('token') || '' // default value - empty string or token value from localStorage. After success login - value from API /login response. See Swagger.
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN: {
      return { isAuth: true, ...action.payload }; //action.payload - {name, email, token}
    }
    case LOG_OUT: {
      return { isAuth: false, name: '', email: '', token: '' };
    }
    default:
      return state;
  }
}
