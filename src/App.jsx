import { useState, useEffect } from "react";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import Notes from "./pages/Notes";
import Calendar from "./pages/Calendar";
import Weather from "./pages/Weather";
import AIAgent from "./pages/AIAgent";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("dashboard");
  const [theme, setTheme] = useState("light");

  // Load saved theme
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.className = savedTheme;
    }
  }, []);

  // Update theme
  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <Layout 
      activePage={page} 
      setPage={setPage}
      toggleTheme={toggleTheme}
      theme={theme}
    >
      {page === "dashboard" && <Dashboard />}
      {page === "tasks" && <Tasks />}
      {page === "addTask" && <AddTask />}
      {page === "notes" && <Notes />}
      {page === "calendar" && <Calendar />}
      {page === "weather" && <Weather />}
      {page === "aiAgent" && <AIAgent />}

    </Layout>
  );
}