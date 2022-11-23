import { ADD_COURSE, REMOVE_COURSE, SET_COURSES } from './actionTypes';

const initialState = [];

export function coursesReducer(state = initialState, action) {
  switch (action.type) {
    case SET_COURSES:
      return action.payload;
    case ADD_COURSE:
      return [...state, action.payload];
    case REMOVE_COURSE:
      return state.filter((course) => course.id !== action.payload); //action.payload === courseId
    default:
      return state;
  }
}
