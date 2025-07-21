import React from "react";
import { useState } from "react";
import "../Styles/Todo.css";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");

  //Add items in list
  //Gave unique id ,text
  const addTodo = () => {
    if (inputValue.trim() !== "") {
      const newTodo = {
        id: new Date().getTime(),
        text: inputValue
      };
      setTodos([...todos, newTodo]);
      //Empty The input box
      setInputValue("");
    }
  };

  // Deelete items in list Using Filter
  const deleteItem = (id) => {
    const updatedItems = todos.filter((todo) => todo.id !== id);
    setTodos(updatedItems);
  };

  // Edit Button Function
  const enterEditMode = (id, text) => {
    setEditMode(true);
    setEditId(id);
    setEditValue(text);
  };

  //Update the items in list
  const updateTodo = () => {
    const UpdatedTodos = todos.map((todo) => {
      if (todo.id === editId) {
        return { ...todo, text: editValue };
      }
      return todo;
    });
    setTodos(UpdatedTodos);
    setEditMode(false);
    setEditId(null);
    setEditValue("");
  };

  return (
  <div className="Todo-pages">
    <div className="todo-container">
        
      <h2>ToDo List</h2>
      <input
        placeholder="Add Task..."
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      {/* ternary opertaor */}
      {editMode ? (
        <div>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={updateTodo}>Update</button>
        </div>
      ) : (
        //else
        <button onClick={addTodo}>Add</button>
      )}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <div>
              <button onClick={() => deleteItem(todo.id)}> Delete </button>
              <button onClick={() => enterEditMode(todo.id, todo.text)}>
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default Todo;
