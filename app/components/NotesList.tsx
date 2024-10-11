import React from "react";
import { Link } from "@remix-run/react";
import { Note } from "@/utils/types";

type NotesListProps = {
  notes: Note[];
};

const NotesList: React.FC<NotesListProps> = ({ notes }) => {
  return (
    <div className="h-full overflow-y-auto">
      {notes.map((note) => (
        <Link
          key={note.id}
          to={`/${note.title.toLowerCase()}`}
          className="block p-3 border-b border-gray-300 cursor-pointer hover:bg-gray-300"
        >
          {note.title}
        </Link>
      ))}
    </div>
  );
};

export default NotesList;
