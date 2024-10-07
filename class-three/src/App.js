import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const addTodo = () => {
    list.push(text);
    setList([...list]);
    console.log(list);

  }
  const deleteTodo = (index) => {
    list.splice(index, 1);
    setList([...list]);

  }

  return (
    <div className="App">
      {/* <h1>{count}</h1> */}
      {/* <button onClick={()=> setCount(count + 1)}>Update count</button> */}
      <input onChange={(e) => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {list.map((x, i) => (
          <li key={i}>{x}
            <button onClick={() => deleteTodo(i)}>Delete</button>
            {" "}
            <button>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;