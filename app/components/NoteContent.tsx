import React from "react";
import { motion } from "framer-motion";
import { Note } from "@/utils/types";

type NoteContentProps = {
  note: Note;
};

const NoteContent: React.FC<NoteContentProps> = ({
  note,
}: NoteContentProps) => {
  return (
    <motion.div
      key={note?.id}
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 10, opacity: 0 }}
      transition={{ type: "tween", duration: 0.2 }}
      className="h-full overflow-y-auto"
    >
      <div className="px-2 mb-4 relative">
        <div className="flex justify-center items-center">
          <p className="text-xs text-gray-400">
            {new Date(note.date).toLocaleTimeString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
              hour: "numeric",
            })}
          </p>
        </div>
        <div className="flex text-2xl items-center gap-x-2 font-bold flex-grow py-2 leading-normal min-h-[50px]">
          <p className="text-gray-400">{note.icon}</p>
          <h1 className="font-bold">{note.title}</h1>
        </div>
      </div>
      <div className="whitespace-pre-wrap">{note.content}</div>
    </motion.div>
  );
};

export default NoteContent;
