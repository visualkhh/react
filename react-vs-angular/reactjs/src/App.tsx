import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";

function App() {
  const count = useSelector((state: number) => state);
  const countDispatch = useDispatch();
  return (
      <div>
        <div>{count}</div>
        <button onClick={()=>{countDispatch({type: 'up'})}}>Count++</button>
      </div>
  );
}
// function App() {
//   const [count, setCount] = useState(0)
//   return (
//       <div>
//         <div>{count}</div>
//         <button onClick={()=>{setCount(count+1)}}>Count++</button>
//       </div>
//   );
// }
export default App;
