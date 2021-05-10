import React, { useState } from "react";
import { saveTodo } from "../services";

const InputTodo = ({ getTodos }) => {
  const [description, setDescription] = useState("");

  const handleAddTodo = async (e) => {
    e.preventDefault();
    const payload = {
      description,
    };
    await saveTodo(payload);
    await getTodos();
  };

  return (
    <>
      <h1 className="text-center mt-5">Simple Todo List</h1>
      <form className="d-flex mt-5" onSubmit={handleAddTodo}>
        <input
          type="text"
          className="form-control"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </>
  );
};

export default InputTodo;
