import { useState } from "react";
// import { Search, Edit3, ChevronRight } from "lucide-react";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Input } from "@/components/ui/input";
import { Note, notes } from "@/utils/types";

export default function Component() {
  const [selectedNote, setSelectedNote] = useState<Note | null>(notes[2]); // Set "principles" as default selected note

  return (
    <div className="flex h-screen bg-[#1c1c1e] text-[#e5e5e5] font-sans">
      {/* Sidebar */}
      {/* <div className="w-80 bg-[#2c2c2e] border-r border-[#3a3a3c] flex flex-col"> */}
      {/* Search and Edit */}
      {/* <div className="p-2 flex items-center space-x-2 border-b border-[#3a3a3c]">
          <div className="relative flex-grow">
            <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#8e8e93]" />
            <Input
              className="pl-8 bg-[#1c1c1e] border-0 rounded-md text-[#e5e5e5] placeholder-[#8e8e93]"
              placeholder="Search"
            />
          </div>
          <button className="text-[#0a84ff] hover:text-[#409cff]">
            <Edit3 className="h-5 w-5" />
          </button>
        </div> */}

      {/* Notes List */}
      {/* <ScrollArea className="flex-grow">
          <div className="p-2">
            <div className="mb-4">
              <h2 className="text-[#8e8e93] text-xs font-semibold mb-2 px-2">
                Notes
              </h2>
              <div className="space-y-1">
                <div className="flex items-center px-2 py-1 text-[#0a84ff]">
                  <ChevronRight className="h-4 w-4 mr-1" />
                  <span className="text-sm font-medium">Pinned</span>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-[#8e8e93] text-xs font-semibold mb-2 px-2">
                Today
              </h2>
              <div className="space-y-1">
                {notes.slice(0, 4).map((note) => (
                  <button
                    key={note.id}
                    onClick={() => setSelectedNote(note)}
                    className={`flex items-center w-full text-left px-2 py-1 rounded ${
                      selectedNote?.id === note.id
                        ? "bg-[#3a3a3c]"
                        : "hover:bg-[#3a3a3c]"
                    }`}
                  >
                    <span className="mr-2">{note.icon}</span>
                    <div>
                      <div className="font-medium">{note.title}</div>
                      <div className="text-xs text-[#8e8e93]">
                        {note.date} {note.content.slice(0, 20)}...
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-[#8e8e93] text-xs font-semibold mb-2 px-2">
                Yesterday
              </h2>
              <div className="space-y-1">
                {notes.slice(4, 6).map((note) => (
                  <button
                    key={note.id}
                    onClick={() => setSelectedNote(note)}
                    className={`flex items-center w-full text-left px-2 py-1 rounded ${
                      selectedNote?.id === note.id
                        ? "bg-[#3a3a3c]"
                        : "hover:bg-[#3a3a3c]"
                    }`}
                  >
                    <span className="mr-2">{note.icon}</span>
                    <div>
                      <div className="font-medium">{note.title}</div>
                      <div className="text-xs text-[#8e8e93]">
                        {note.date} {note.content.slice(0, 20)}...
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-[#8e8e93] text-xs font-semibold mb-2 px-2">
                Previous 7 Days
              </h2>
              <div className="space-y-1">
                {notes.slice(6, 8).map((note) => (
                  <button
                    key={note.id}
                    onClick={() => setSelectedNote(note)}
                    className={`flex items-center w-full text-left px-2 py-1 rounded ${
                      selectedNote?.id === note.id
                        ? "bg-[#3a3a3c]"
                        : "hover:bg-[#3a3a3c]"
                    }`}
                  >
                    <span className="mr-2">{note.icon}</span>
                    <div>
                      <div className="font-medium">{note.title}</div>
                      <div className="text-xs text-[#8e8e93]">
                        {note.date} {note.content.slice(0, 20)}...
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-[#8e8e93] text-xs font-semibold mb-2 px-2">
                Previous 30 Days
              </h2>
              <div className="space-y-1">
                {notes.slice(8).map((note) => (
                  <button
                    key={note.id}
                    onClick={() => setSelectedNote(note)}
                    className={`flex items-center w-full text-left px-2 py-1 rounded ${
                      selectedNote?.id === note.id
                        ? "bg-[#3a3a3c]"
                        : "hover:bg-[#3a3a3c]"
                    }`}
                  >
                    <span className="mr-2">{note.icon}</span>
                    <div>
                      <div className="font-medium">{note.title}</div>
                      <div className="text-xs text-[#8e8e93]">
                        {note.date} {note.content.slice(0, 20)}...
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </div> */}

      {/* Main Content */}
      {/* <div className="flex-grow bg-[#1c1c1e] p-6 overflow-auto">
        {selectedNote && (
          <div>
            <h1 className="text-2xl font-bold mb-4">{selectedNote.title}</h1>
            <div className="whitespace-pre-wrap">{selectedNote.content}</div>
          </div>
        )}
      </div> */}
    </div>
  );
}
