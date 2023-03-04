import { combineReducers } from "redux";
import flightReducer from "./booking/bookingReducer";

const rootReducer = combineReducers({
  flights: flightReducer,
});

export default rootReducer;
