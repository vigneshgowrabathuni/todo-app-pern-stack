import React, { useEffect, useState } from "react";
import { InputTodo, ListTodos } from "./components";
import { fetchTodos } from "./services";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);

  const getTodos = async () => {
    const todos = await fetchTodos();
    setTodos(todos);
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="container">
      <InputTodo getTodos={getTodos} />
      <ListTodos todos={todos} getTodos={getTodos} />
    </div>
  );
}

export default App;
