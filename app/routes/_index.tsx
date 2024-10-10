import { json, LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useState, useRef, useEffect } from "react";
import { getNotes } from "~/utils/types";
import NotesList from "~/components/NotesList";

export const loader: LoaderFunction = async () => {
  const notes = getNotes();
  return json({ notes });
};

export default function Index() {
  const { notes } = useLoaderData<typeof loader>();
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
        <div
          className="absolute top-0 right-0 w-1 h-full cursor-col-resize bg-gray-400 opacity-0 hover:opacity-100"
          onMouseDown={handleMouseDown}
        ></div>
      </div>
      <div className="flex-grow p-6">
        <h1 className="text-2xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p>Select a note from the sidebar to view its content.</p>
      </div>
    </div>
  );
}
