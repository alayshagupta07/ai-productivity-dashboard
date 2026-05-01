import { useState } from "react";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import Tasks from "./pages/Tasks";
import AddTask from "./pages/AddTask";
import Notes from "./pages/Notes";
import Calendar from "./pages/Calendar";
import Weather from "./pages/Weather";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <Layout activePage={page} setPage={setPage}>
      {page === "dashboard" && <Dashboard />}
      {page === "tasks" && <Tasks />}
      {page === "addTask" && <AddTask />}
      {page === "notes" && <Notes />}
      {page === "calendar" && <Calendar />}
      {page === "weather" && <Weather />}
    </Layout>
  );
}
