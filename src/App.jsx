
import './App.css';
import { useReducer, useState } from 'react';
const initialState = {count:0};
const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'incrementByAmount':
      return {count: state.count + action.payload};
    case 'decrementByAmount':
      return {count: state.count - action.payload};
      case 'reset':
        return {count:0 };
    default:
     return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState(0);

  const handleIncrement = () => {
    dispatch({type: 'incrementByAmount', payload: inputValue});
    setInputValue(0);
  };
  const handleDecrement = () => {
    dispatch({type: 'decrementByAmount', payload: inputValue}); 
    setInputValue(0);
  };


  return (
    <div>
      <input type="number" value={inputValue} onChange={(e) => setInputValue(Number(e.target.value))} />
      <p>Count: {state.count}</p>
      <button onClick={()=>dispatch({type:"increment"})}>Increment</button>
      <button onClick={()=>dispatch({type:"decrement"})}>decrement</button>
      <button onClick={()=>dispatch({type:"reset"})}>Reset</button>
      <button onClick={handleIncrement}>Increment by {inputValue}</button>
      <button onClick={handleDecrement}>Decrement by {inputValue}</button>  
    </div>


  )
}


export default App;
