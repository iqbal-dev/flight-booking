import { toast } from "react-toastify";
import { DELETE_BOOKING } from "../booking/actiontype";

// create our first middleware
const errorHandling = (store) => (next) => (action) => {
  if (action.type === DELETE_BOOKING) {
    toast.success("Successfully deleted");
    return next(action);
  } else if (store.getState()?.flights?.flightList?.length < 3) {
    toast.success("Successfully created");
    return next(action);
  } else {
    return toast.error("Booking limit is over");
  }
};

export default errorHandling;
