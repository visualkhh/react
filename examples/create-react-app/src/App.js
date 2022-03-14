import logo from './logo.svg';
import './App.css';
import {useEffect, useRef, useState} from "react";
import Main from "./components/Main";

const useTitle = initialTitle => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        document.title = title;
    };
    useEffect(updateTitle, [title]);
    return setTitle;
};

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('name');
  const input = useRef();

  const titleUpdater = useTitle('React App...');
  setTimeout(() => {
    titleUpdater('React App');
  }, 1000);

  const upCount = () => {
    // console.log(input.current.value)
    setCount(Number(input.current.value) || 0);
  }
  console.log('--------', count);
  useEffect(() => {
    console.log('useEffect');
  }, []);
  return (
    <div className="App">
      <main>
        <Main count={count} name={setName}/>
        <div>
          <div>name: {name}</div>
          <div> count: {count} </div>
          <div><input ref={input} type="text"></input> </div>
          <button onClick={()=>{setCount(count + 1)}}>plus</button>
          <button onClick={upCount}>input ref set</button>
        </div>
      </main>
    </div>
  );
}

export default App;
