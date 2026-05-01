// src/pages/Dashboard.jsx
import { useApp } from "../context/AppContext";

export default function Dashboard() {
  const { tasks, notes, events } = useApp();

  const done = tasks.filter((task) => task.status === "Done").length;

  return (
    <section>
      <div className="stats-grid">
        <div className="card">
          <span className="dash-icon">✓</span>
          <h3>{done}/{tasks.length}</h3>
          <p>Tasks Done</p>
        </div>

        <div className="card">
          <span className="dash-icon">N</span>
          <h3>{notes.length}</h3>
          <p>Notes</p>
        </div>

        <div className="card">
          <span className="dash-icon">C</span>
          <h3>{events.length}</h3>
          <p>Events Today</p>
        </div>

        <div className="card">
          <span className="dash-icon">AI</span>
          <h3>86%</h3>
          <p>Focus Score</p>
        </div>
      </div>

      <div className="panel">
        <h2>Smart Suggestions</h2>
        <p>Start with the task that matters most for your capstone. Once that is done,
        the rest of the day will feel much lighter</p>
        <p>Convert your notes into viva points and final report sections.</p>
        <p>Keep a 10-minute buffer before your next calendar event.</p>
      </div>
    </section>
  );
}
