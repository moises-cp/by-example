import { FC } from 'react';
import type { Note } from './type';

interface Props {
  note: Note;
  onDelete: (id: number) => void;
  onEdit: (note: Note) => void;
}

const Item: FC<Props> = ({ note, onDelete, onEdit }) => {
  if (!note) return null;

  return (
    <div className="item">
      <div>
        <h3>{note.title}</h3>
        <p>{note.description}</p>
      </div>
      <div className="btn-container">
        <button
          className="secondary edit"
          type="button"
          onClick={() => onEdit(note)}
        >
          Edit
        </button>
        <button
          className="secondary danger"
          type="button"
          onClick={() => onDelete(note.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
