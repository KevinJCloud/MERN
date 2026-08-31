import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

function App() {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  async function loadTasks() {
    try {
      const response = await fetch(`${API_URL}/api/tasks`);
      if (!response.ok) throw new Error("Failed to load tasks");
      setTasks(await response.json());
    } catch (err) {
      setError(err.message);
    }
  }

  useEffect(() => {
    loadTasks();
  }, []);

  async function addTask(event) {
    event.preventDefault();
    if (!title.trim()) return;

    const response = await fetch(`${API_URL}/api/tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title })
    });

    if (response.ok) {
      setTitle("");
      loadTasks();
    }
  }

  async function toggleTask(task) {
    await fetch(`${API_URL}/api/tasks/${task._id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed })
    });
    loadTasks();
  }

  async function deleteTask(id) {
    await fetch(`${API_URL}/api/tasks/${id}`, { method: "DELETE" });
    loadTasks();
  }

  return (
    <main className="container">
      <h1>Task Manager</h1>

      <form onSubmit={addTask} className="add-form">
        <input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Enter a task"
        />
        <button type="submit">Add</button>
      </form>

      {error && <p className="error">{error}</p>}

      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <span
              onClick={() => toggleTask(task)}
              className={task.completed ? "done" : ""}
            >
              {task.title}
            </span>
            <button onClick={() => deleteTask(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
