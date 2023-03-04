import { ADD_BOOKING, DELETE_BOOKING } from "./actiontype";

export const addFlight = (value) => {
  return {
    type: ADD_BOOKING,
    payload: value,
  };
};
export const deleteFlight = (value) => {
  return {
    type: DELETE_BOOKING,
    payload: value,
  };
};
