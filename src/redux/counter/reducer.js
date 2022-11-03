import { INCREMENT, DECREMENT, RESET, INCREMENT_AMOUNT } from './actionTypes';

const initialState = 0;

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case RESET:
      return 0;
    case INCREMENT_AMOUNT:
      return state + action.payload;
    default:
      return state;
  }
}
