function Main(props) {
  return (
    <div>
      <h1>Hello World {props.count}</h1>
      <p>This is my first React app!</p>
        <button onClick={()=>{props.name('rrrr')}}>change Name</button>
    </div>
  );
}

export default Main;