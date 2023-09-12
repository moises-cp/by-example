import { useState } from 'react';
import Notes from './Notes';
import Form from './Form';
import type { Note } from './type';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteToEdit, setNoteToEdit] = useState<Note | null>(null);

  const addNote = (note: Note) => {
    setNotes([...notes, note]);
  };

  const editNote = (editedNote: Note) => {
    const idx = notes.findIndex((note) => note.id === editedNote.id);
    if (idx === undefined) return;

    const newNotes = [...notes];
    newNotes[idx] = editedNote;
    setNotes(newNotes);
    setNoteToEdit(null);
  };

  const handleFormSubmission = (newNote: Note) => {
    const doesNoteExist = notes.find((note) => note.id === newNote.id);
    doesNoteExist ? editNote(newNote) : addNote(newNote);
  };

  const deleteNote = (id: number) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const handleNoteToEdit = (note: Note) => setNoteToEdit(note);

  return (
    <>
      <header>
        <h1>Your TO-DOs</h1>
      </header>
      <main>
        <Form noteToEdit={noteToEdit} onSubmit={handleFormSubmission} />
        <Notes notes={notes} onDelete={deleteNote} onEdit={handleNoteToEdit} />
      </main>
    </>
  );
}

export default App;
