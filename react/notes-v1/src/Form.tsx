import { FC, useEffect, useState } from 'react';
import { getRandomNumber } from './util';
import type { Note } from './type';

interface Props {
  noteToEdit?: Note | null;
  onSubmit: (note: Note) => void;
}

const Form: FC<Props> = ({ noteToEdit, onSubmit }) => {
  const [description, setDescription] = useState<string>('');
  const [id, setId] = useState<number | null>(null);
  const [title, setTitle] = useState<string>('');
  const [feedback, setFeedback] = useState<string>('');

  const btnLabel = noteToEdit ? 'Update' : 'Add';

  const clearFields = () => {
    setDescription('');
    setId(null);
    setTitle('');
  };

  const validate = () => {
    if (!title || !description) {
      setFeedback('Enter a title and a description.');
      return false;
    }
    setFeedback('');
    return true;
  };

  const handleFormSubmission = () => {
    const isValid = validate();
    if (!isValid) return;

    onSubmit({ description, id: id ?? getRandomNumber(), title });
    clearFields();
  };

  useEffect(() => {
    if (!noteToEdit) return;

    setDescription(noteToEdit.description);
    setId(noteToEdit.id);
    setTitle(noteToEdit.title);
  }, [noteToEdit]);

  return (
    <form className="card">
      <div className="input-wrapper">
        <label htmlFor="title">
          <span className="text-danger">*</span> Title
        </label>
        <input
          id="title"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          type="text"
          value={title}
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="description">* Description</label>
        <textarea
          id="description"
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          value={description}
        ></textarea>
      </div>
      <div>
        {feedback && <p className="feedback danger">{feedback}</p>}
        <button
          className="primary"
          type="button"
          onClick={handleFormSubmission}
        >
          {btnLabel}
        </button>
      </div>
    </form>
  );
};

export default Form;
