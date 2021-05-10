import axios from "axios";

const baseUrl = "http://localhost:5000";

export const fetchTodos = async () => {
  try {
    const response = await axios.get(`${baseUrl}/todos`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const saveTodo = async (payload) => {
  try {
    await axios.post(`${baseUrl}/todos`, payload);
  } catch (err) {
    console.log(err);
  }
};

export const updateTodo = async (id, payload) => {
  try {
    await axios.put(`${baseUrl}/todos/${id}`, payload);
  } catch (err) {
    console.log(err);
  }
};

export const deleteTodo = async (id) => {
  try {
    await axios.delete(`${baseUrl}/todos/${id}`);
  } catch (err) {
    console.log(err);
  }
};
