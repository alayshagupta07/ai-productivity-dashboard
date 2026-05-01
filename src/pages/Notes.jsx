// src/pages/Notes.jsx
import { useState } from "react";
import { useApp } from "../context/AppContext";

export default function Notes() {
  const { notes, addNote } = useApp();
  const [note, setNote] = useState({ title: "", content: "" });

  const submit = (e) => {
    e.preventDefault();
    addNote(note);
    setNote({ title: "", content: "" });
  };

  return (
    <div className="panel">
      <h2>Notes</h2>
      <form className="form" onSubmit={submit}>
        <input placeholder="Note title" value={note.title} onChange={e => setNote({...note, title: e.target.value})} required />
        <textarea placeholder="Write note..." value={note.content} onChange={e => setNote({...note, content: e.target.value})} required />
        <button>Save Note</button>
      </form>
      <div className="notes-grid">
        {notes.map(n => <div className="note" key={n.id}><h3>{n.title}</h3><p>{n.content}</p></div>)}
      </div>
    </div>
  );
}
