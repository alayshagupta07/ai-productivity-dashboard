// src/components/layout/Sidebar.jsx

const items = [
  { key: "dashboard", icon: "⌘", label: "Dashboard" },
  { key: "tasks", icon: "✓", label: "Tasks" },
  { key: "addTask", icon: "+", label: "Add Task" },
  { key: "notes", icon: "N", label: "Notes" },
  { key: "calendar", icon: "C", label: "Calendar" },
  { key: "weather", icon: "W", label: "Weather" },
  { key: "aiAgent", icon: "AI", label: "AI Agent" },
];

export default function Sidebar({ activePage, setPage }) {
  return (
    <aside className="sidebar">
      <h2>ProductiveAI</h2>

      {items.map((item) => (
        <button
          key={item.key}
          className={activePage === item.key ? "active" : ""}
          onClick={() => setPage(item.key)}
        >
          <span className="nav-icon">{item.icon}</span>
          {item.label}
        </button>
      ))}
    </aside>
  );
}
