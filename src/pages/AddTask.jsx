// src/pages/AddTask.jsx
import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function AddTask() {
  const { addTask } = useApp();
  const [form, setForm] = useState({ title: "", priority: "High", due: "Today" });

  const submit = (e) => {
    e.preventDefault();
    addTask(form);
    setForm({ title: "", priority: "High", due: "Today" });
  };

  return (
    <form className="panel form" onSubmit={submit}>
      <h2>Add New Task</h2>
      <input placeholder="Task title" value={form.title} onChange={e => setForm({...form, title: e.target.value})} required />
      <select value={form.priority} onChange={e => setForm({...form, priority: e.target.value})}>
        <option>High</option><option>Medium</option><option>Low</option>
      </select>
      <input placeholder="Due date" value={form.due} onChange={e => setForm({...form, due: e.target.value})} />
      <button>Add Task</button>
    </form>
  );
}
