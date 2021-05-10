const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");

//midleware
app.use(cors());
app.use(express.json());

// Routes

// create a todo
app.post("/todos", async (req, res) => {
  try {
    const { description } = req.body;
    const newTodo = await db.query(
      "INSERT INTO todo (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTodo.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

// get all todos
app.get("/todos", async (req, res) => {
  try {
    const todos = await db.query("SELECT * FROM todo");
    res.json(todos.rows);
  } catch (err) {
    console.log(err);
  }
});

// get a todo
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await db.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
    res.json(todo.rows[0]);
  } catch (err) {
    console.log(err);
  }
});

// update a todos
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    await db.query("UODATE todo SET description = $1 WHERE todo_id = $2", [
      description,
      id,
    ]);
    res.json("Todo updated successfully");
  } catch (err) {
    console.log(err);
  }
});

// delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await db.query("DELETE FROM todo WHERE todo_id = $1", [id]);
    res.json("Todo deleted successfully");
  } catch (err) {
    console.log(err);
  }
});

app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
