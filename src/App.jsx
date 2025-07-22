import { useState, useEffect } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";

import "./notes.css";

function App() {
  const [notes, setNotes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedNotes = localStorage.getItem("myNotes");
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("myNotes", JSON.stringify(notes));
    }
  }, [notes]);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const deleteNote = (id) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const updateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
  };
  return (
    <div className="App">
      <h1>Notes App</h1>
      <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
      <NoteForm onAddNote={addNote} />
      <NoteList
        notes={notes.filter(
          (note) =>
            note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            note.content.toLowerCase().includes(searchTerm.toLowerCase())
        )}
        onDelete={deleteNote}
        onUpdate={updateNote}
      />
    </div>
  );
}

export default App;
