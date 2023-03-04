import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import BookingForm from "./components/BookingForm";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import store from "./redux/store";
function App() {
  return (
    <Provider store={store}>
      <Header />
      <BookingForm />
      <Dashboard />
      <ToastContainer />
    </Provider>
  );
}

export default App;
