import { useState } from "react";

const NoteItem = ({ note, onDelete, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note.title);
  const [editedContent, setEditedcontent] = useState(note.content);
  const [editedCategory, setEditedCategory] = useState(note.category);

  const handleSave = () => {
    onUpdate({
      id: note.id,
      title: editedTitle,
      content: editedContent,
      category: editedCategory,
    });
    setIsEditing(false);
  };

  return (
    <div className={`note-item ${note.category.toLowerCase()}`}>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedcontent(e.target.value)}
          />
          <select
            value={editedCategory}
            onChange={(e) => setEditedCategory(e.target.value)}
          >
            <option value="General">General</option>
            <option value="Work">Work</option>
            <option value="Ideas">Ideas</option>
            <option value="Personal">Personal</option>
          </select>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </>
      ) : (
        <>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <p>
            <strong>Category:</strong> {note.category}
          </p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDelete(note.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default NoteItem;
