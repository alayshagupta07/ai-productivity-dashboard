// src/context/AppContext.jsx
import { createContext, useContext, useState } from "react";
import { tasksData, notesData, eventsData } from "../data/mockData";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [tasks, setTasks] = useState(tasksData);
  const [notes, setNotes] = useState(notesData);
  const [events] = useState(eventsData);

  const addTask = (task) => {
    setTasks([{ id: Date.now(), status: "Todo", ...task }, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id
        ? { ...task, status: task.status === "Done" ? "Todo" : "Done" }
        : task
    ));
  };

  const addNote = (note) => {
    setNotes([{ id: Date.now(), ...note }, ...notes]);
  };

  return (
    <AppContext.Provider value={{ tasks, notes, events, addTask, toggleTask, addNote }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);
