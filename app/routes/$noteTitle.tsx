import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import NoteContent from "@/components/NoteContent";
import { useState, useRef, useEffect } from "react";
import NotesList from "@/components/NotesList";
import { notes } from "@/utils/types";

export const loader: LoaderFunction = async ({ params }) => {
  const note = notes.find(
    (n) => n.title.toLowerCase() === params.noteTitle?.toLowerCase()
  );
  if (!note) {
    throw new Response("Note not found", { status: 404 });
  }
  return json({ note, notes });
};

export default function NotePage() {
  const { note, notes } = useLoaderData<typeof loader>();
  const [sidebarWidth, setSidebarWidth] = useState(250);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const newWidth = e.clientX;
      if (newWidth > 150 && newWidth < 500) {
        setSidebarWidth(newWidth);
      }
    };

    const handleMouseUp = () => {
      isDraggingRef.current = false;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const handleMouseDown = () => {
    isDraggingRef.current = true;
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div
        ref={sidebarRef}
        className="bg-gray-200 border-r border-gray-300 relative"
        style={{ width: `${sidebarWidth}px` }}
      >
        <NotesList notes={notes} />
        <button
          className="absolute top-0 right-0 w-1 h-full cursor-col-resize bg-gray-400 opacity-0 hover:opacity-100"
          onMouseDown={handleMouseDown}
        ></button>
      </div>
      <div className="flex-grow">
        <NoteContent note={note} />
      </div>
    </div>
  );
}
