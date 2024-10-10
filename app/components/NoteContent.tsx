import React, { useState } from "react";
import { Note } from "../utils/types";

type NoteContentProps = {
  note: Note;
};

const NoteContent: React.FC<NoteContentProps> = ({ note }) => {
  const [userNote, setUserNote] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd save this note to a database
    console.log(`New note for ${note.title}: ${userNote}`);
    setUserNote("");
  };

  return (
    <div className="h-full p-6 bg-white">
      <h2 className="text-2xl font-bold mb-4">{note.title}</h2>
      <div className="mb-6">{note.content}</div>
      <form onSubmit={handleSubmit} className="mt-4">
        <textarea
          value={userNote}
          onChange={(e) => setUserNote(e.target.value)}
          placeholder="Leave a note..."
          className="w-full h-32 p-2 border border-gray-300 rounded resize-none"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Add Note
        </button>
      </form>
    </div>
  );
};

export default NoteContent;
