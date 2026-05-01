// src/pages/Tasks.jsx
import { useApp } from "../context/AppContext";

export default function Tasks() {
  const { tasks, toggleTask } = useApp();

  return (
    <div className="panel">
      <h2>Tasks</h2>
      {tasks.map(task => (
        <div className="task" key={task.id}>
          <div>
            <h3>{task.title}</h3>
            <p>{task.priority} Priority • Due {task.due}</p>
          </div>
          <button onClick={() => toggleTask(task.id)}>{task.status}</button>
        </div>
      ))}
    </div>
  );
}
