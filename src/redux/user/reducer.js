import { LOG_IN, LOG_OUT, SET_LOADING } from './actionTypes';

const initialState = {
  isAuth: false, // default value - false. After success login - true
  name: '', // default value - empty string. After success login - name of user
  email: '', // default value - empty string. After success login - email of user
  token: window.localStorage.getItem('token') || '', // default value - empty string or token value from localStorage. After success login - value from API /login response. See Swagger.
  isLoading: true,
  role: ''
};

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING: {
      return {...state, isLoading: true}
    }
    case LOG_IN: {
      return { isAuth: true, ...action.payload, isLoading: false }; //action.payload - {name, email, token}
    }
    case LOG_OUT: {
      return { isAuth: false, name: '', email: '', token: '', role: '', isLoading: false };
    }
    default:
      return state;
  }
}
