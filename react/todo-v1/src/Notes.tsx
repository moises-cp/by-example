import { FC } from 'react';
import Item from './Item';
import type { Note } from './type';

interface Props {
  notes: Note[] | null;
  onDelete: (id: number) => void;
  onEdit: (note: Note) => void;
}

const Notes: FC<Props> = ({ notes, onDelete, onEdit }) => {
  const hasNotes = notes && Array.isArray(notes) && notes.length > 0;

  return (
    <>
      <div className="card notes">
        <h2>TO-DO</h2>

        {hasNotes &&
          notes.map((note) => (
            <Item
              key={note.id}
              note={note}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
      </div>
    </>
  );
};

export default Notes;
