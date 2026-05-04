// src/components/layout/Topbar.jsx
export default function Topbar({ toggleTheme, theme }) {
  return (
    <header className="topbar">
      <div>
        <p>AI Productivity Dashboard</p>
        <h1>Welcome back, Alaysha</h1>
      </div>

      <div className="topbar-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "light" ? "🌙" : "☀️"}
        </button>

        <div className="profile">A</div>
      </div>
    </header>
  );
}