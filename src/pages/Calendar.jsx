// src/pages/Calendar.jsx
import { useApp } from "../context/AppContext";

export default function Calendar() {
  const { events } = useApp();

  return (
    <div className="panel">
      <h2>Daily Planning</h2>
      {events.map(event => (
        <div className="task" key={event.id}>
          <h3>{event.title}</h3>
          <button>{event.time}</button>
        </div>
      ))}
    </div>
  );
}
