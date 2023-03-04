import { ADD_BOOKING, DELETE_BOOKING } from "./actiontype";

const initialState = {
  flightList: [],
  message: "",
};

const flightReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return {
        ...state,
        flightList: [
          ...state.flightList,
          { ...action.payload, id: state.flightList.length + 1 },
        ],
        message: "Successfully added",
      };
    case DELETE_BOOKING:
      return {
        ...state,
        flightList: state.flightList?.filter(
          (data) => data.id !== action.payload
        ),
        message: "Successfully deleted",
      };
    default:
      return state;
  }
};

export default flightReducer;
