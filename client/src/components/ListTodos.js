import React from "react";
import EditTodo from "./EditTodo";
import { deleteTodo } from "../services";

const ListTodos = ({ todos, getTodos }) => {
  const handleDeleteTodo = async (id) => {
    await deleteTodo(id);
    await getTodos();
  };

  return (
    <>
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>Description</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.description}</td>
              <td>
                <EditTodo todo={todo} getTodos={getTodos} />
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDeleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ListTodos;
