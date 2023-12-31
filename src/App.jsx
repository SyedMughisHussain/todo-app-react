import { useState } from "react";
import "./index.css";

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
      <div className="flex justify-center text-white mt-3">
        <div>
          <h1 className="text-4xl font-bold">Todo App</h1>
          <form className="mt-5" onSubmit={addTodo}>
            <input
              className="p-2 rounded-lg text-black"
              type="text"
              placeholder="Enter Todo"
              value={text}
              onChange={(event) => {
                console.log(event.target.value);
                setText(event.target.value);
              }}
            />
            <button className="ml-4 bg-orange-400 p-2 rounded-lg" type="submit">
              Add
            </button>
          </form>
          <ul>
            {todo.map((item, index) => {
              return (
                <li
                  className="bg-white rounded-lg mt-3 mb-3 p-1 text-black flex justify-between"
                  key={index}
                >
                  {item}
                  <div>
                    <button className="p-1 bg-blue-500 text-white rounded-lg" onClick={() => editTodo(index)}>Edit</button>
                    <button className="p-1 bg-red-600 ml-2 text-white rounded-lg" onClick={() => deleteTodo(index)}>Delete</button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
