"use client";
import { useState } from "react";

export default function Home() {

  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, task]);
    setTask("");
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow">
        <h1 className="text-2xl font-bold mb-4 text-black text-center">Simple To-Do List</h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter a task"
            className="flex-1 border p-2 rounded text-gray-600"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            onClick={addTask}
            className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        {/* Task List */}
        <ul>
          {tasks.map((t, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-2 mb-2 rounded text-black"
            >
              <span>{t}</span>
              <button
                onClick={() => deleteTask(index)}
                className="bg-red-500 text-white px-2 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
