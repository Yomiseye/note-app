import NoteItem from "./NoteItem";
const NoteList = ({ notes, onDelete, onUpdate }) => {
  return (
    <div className="note-list">
      {notes.length === 0 ? (
        <p>No notes yet.</p>
      ) : (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            note={note}
            onDelete={onDelete}
            onUpdate={onUpdate}
          />
        ))
      )}
    </div>
  );
};

export default NoteList;
