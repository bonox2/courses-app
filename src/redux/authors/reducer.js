import { ADD_AUTHOR } from './actionTypes';

const initialState = [
  { name: 'author', id: '9b87e8b8-6ba5-40fc-a439-c4e30a373d36' },
  { name: 'author2', id: '1c972c52-3198-4098-b6f7-799b45903199' },
  { name: 'author3', id: '072fe3fc-e751-4745-9af5-aa9eed0ea9ed' },
  { name: 'author4', id: '40b21bd5-cbae-4f33-b154-0252b1ae03a9' },
  { name: 'author5', id: '5e0b0f18-32c9-4933-b142-50459b47f09e' },
  { name: 'author6', id: '9987de6a-b475-484a-b885-622b8fb88bda' }
];

export function authorsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_AUTHOR:
      return [...state, action.payload];
    default:
      return state;
  }
}
