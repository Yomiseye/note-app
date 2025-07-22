import { useState } from "react";

const NoteForm = ({ onAddNote }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("General");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === "" || content.trim() === "") return;

    const newNote = {
      id: Date.now(),
      title,
      content,
      category,
    };

    onAddNote(newNote);
    setContent("");
    setTitle("");
    setCategory("General");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Note Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="General">General</option>
        <option value="Work">Work</option>
        <option value="Ideas">Ideas</option>
        <option value="Personal">Personal</option>
      </select>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default NoteForm;
