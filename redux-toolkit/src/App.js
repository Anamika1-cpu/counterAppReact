import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./redux/slices/counter/counterSliceCop";

function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state?.counter);
  console.log(counter);
  return (
    <div className='App'>
      <h1>Redux Toolkit Counter</h1>
      <h2>Count: {counter?.value}</h2>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        +
      </button>
      {
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
      }
      {
        <button
          onClick={() => {
            dispatch(incrementByAmount(10));
          }}
        >
          increasedByAmount
        </button>
      }
    </div>
  );
}

export default App;
