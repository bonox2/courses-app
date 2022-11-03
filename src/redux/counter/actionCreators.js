import { INCREMENT, DECREMENT, RESET, INCREMENT_AMOUNT } from './actionTypes';

export function incrementCounter() {
  return {
    type: INCREMENT
  };
}
export function decrementCounter() {
  return {
    type: DECREMENT
  };
}
export function resetCounter() {
  return {
    type: RESET
  };
}
export function incrementAmountCounter(amount) {
    return {
      type: INCREMENT_AMOUNT,
      payload: amount
    };
  }
