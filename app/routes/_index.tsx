import { useState } from "react";
import { Search, SquarePen, ChevronRight, Pin } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { Note, notes } from "@/utils/types";
import { noteIn } from "@/utils/utils";

export default function Component() {
  const [selectedNote, setSelectedNote] = useState<Note | null>(notes[2]); // Set "principles" as default selected note

  return (
    <div className="flex h-screen bg-[#1c1c1e] text-[#e5e5e5] font-sans">
      {/* Sidebar */}
      <div className="sidebar w-64 flex-shrink-0 border-r border-gray-400/20 overflow-y-auto ">
        {/* Search and Edit */}
        <div className="p-2 flex items-center space-x-2">
          <div className="relative flex-grow">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 " />
            <Input
              className="flex h-10 bg-[#1c1c1c] disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none *:border-none w-full pl-8 pr-2 rounded-md text-base sm:text-sm placeholder:text-gray-400 border-none"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Notes List */}
        <ScrollArea
          className="flex-grow px-2"
          style={{ scrollbarWidth: "none" }}
        >
          <div className="flex flex-col gap-y-4">
            <div className="flex items-center justify-between px-1">
              <h2 className="text-xl font-bold px-2">Notes</h2>
              <button className="hover:text-gray-100">
                <SquarePen className="h-5 w-5" />
              </button>
            </div>
            <Section
              notes={notes.slice(0, 2)}
              selectedNote={selectedNote}
              setSelectedNote={setSelectedNote}
            >
              <Section.Title>
                <div className="flex items-center gap-1">
                  <Pin className="w-4 h-4 text-gray-400" />
                  <span>Pinned</span>
                </div>
              </Section.Title>
            </Section>
            <Section
              notes={notes.slice(2, 5)}
              selectedNote={selectedNote}
              setSelectedNote={setSelectedNote}
            >
              <Section.Title>Today</Section.Title>
            </Section>
            <Section
              notes={notes.slice(5, 7)}
              selectedNote={selectedNote}
              setSelectedNote={setSelectedNote}
            >
              <Section.Title>Yesterday</Section.Title>
            </Section>
            <Section
              notes={notes.slice(6, 8)}
              selectedNote={selectedNote}
              setSelectedNote={setSelectedNote}
            >
              <Section.Title>Last Week</Section.Title>
            </Section>
            <Section
              notes={notes.slice(8)}
              selectedNote={selectedNote}
              setSelectedNote={setSelectedNote}
            >
              <Section.Title>Older</Section.Title>
            </Section>
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      <div className="flex-grow bg-[#1c1c1e] p-6 overflow-auto">
        {selectedNote && (
          <div>
            <h1 className="text-2xl font-bold mb-4">{selectedNote.title}</h1>
            <div className="whitespace-pre-wrap">{selectedNote.content}</div>
          </div>
        )}
      </div>
    </div>
  );
}
type SectionProps = {
  children: React.ReactNode;
  notes: Note[];
  selectedNote: Note | null;
  setSelectedNote: (note: Note) => void;
};
function Section({
  children,
  notes,
  selectedNote,
  setSelectedNote,
}: SectionProps) {
  return (
    <div className="">
      {children}
      <ul className="space-y-2">
        {notes.map((note) => (
          <li
            className={`min-h-[50px] rounded-md px-2 ${
              selectedNote?.id === note.id
                ? "bg-[#9D7D28]"
                : "hover:bg-[#3a3a3c]"
            }`}
            key={note.id}
          >
            <button
              onClick={() => setSelectedNote(note)}
              className="py-2 w-full flex flex-col items-start justify-center"
            >
              <h2 className="text-sm font-bold text-white px-4 break-words">
                <span className="pr-2">{note.icon}</span>
                {note.title}
              </h2>
              <p
                className={`w-full text-xs px-4 overflow-hidden text-ellipsis whitespace-nowrap  ${
                  note.id === selectedNote?.id
                    ? "text-gray-300"
                    : "text-gray-400"
                }`}
              >
                <span className="text-white">{note.date}</span>
                <span className="ms-1">{note.content}</span>
              </p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
Section.Title = function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h3 className="text-gray-400 text-xs font-bold mb-2 px-2">{children}</h3>
  );
};

<style jsx>
  {`
    sidebar::-webkit-scrollbar {
      display: none;
    }
  `}
</style>;
