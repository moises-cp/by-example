import { useState } from 'react';
import Notes from './Notes';
import Form from './Form';
import Footer from './Footer';
import type { Note } from './type';

function App() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [noteToEdit, setNoteToEdit] = useState<Note | null>(null);

  const addNote = (note: Note) => {
    setNotes([...notes, note]);
  };

  const editNote = (editedNote: Note) => {
    const noteIndex = notes.findIndex((note) => note.id === editedNote.id);
    if (noteIndex === undefined) return;

    const newNotes = [...notes];
    newNotes[noteIndex] = editedNote;
    setNotes(newNotes);
    setNoteToEdit(null);
  };

  const handleFormSubmission = (submittedNote: Note) => {
    const isExistingNote = notes.find((note) => note.id === submittedNote.id);
    isExistingNote ? editNote(submittedNote) : addNote(submittedNote);
  };

  const deleteNote = (id: number) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  const handleNoteToEdit = (note: Note) => setNoteToEdit(note);

  return (
    <>
      <header>
        <h1>Your Notes</h1>
      </header>

      <main className="container">
        <Form noteToEdit={noteToEdit} onSubmit={handleFormSubmission} />
        <Notes notes={notes} onDelete={deleteNote} onEdit={handleNoteToEdit} />
      </main>

      <Footer />
    </>
  );
}

export default App;
