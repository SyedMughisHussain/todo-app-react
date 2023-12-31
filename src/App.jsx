import { useState } from "react";

export function App() {
  let [text, setText] = useState("");
  let [todo, setTodo] = useState([]);

  function addTodo(e) {
    e.preventDefault();
    console.log(text);
    todo.push(text);
    setTodo([...todo]);
    console.log(todo);
    setText("");
  }

  function deleteTodo(index) {
    todo.splice(index, 1);
    setTodo([...todo]);
  }

  function editTodo(index) {
    let value = todo[index];
    let newValue = prompt(`Enter new text.`, value);
    todo[index] = newValue;
    setTodo([...todo]);
  }

  return (
    <>
      <h1>Todo App</h1>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter Todo"
          value={text}
          onChange={(event) => {
            console.log(event.target.value);
            setText(event.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todo.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <button onClick={() => editTodo(index)}>Edit</button>
              <button onClick={() => deleteTodo(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
