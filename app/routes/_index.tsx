import { useState } from "react";
import { Search, Edit3, ChevronRight } from "lucide-react";
import { ScrollArea } from "~/components/ui/scroll-area";
import { Input } from "~/components/ui/input";

type Note = {
  id: string;
  title: string;
  date: string;
  content: string;
  category?: string;
  icon?: string;
};

const notes: Note[] = [
  {
    id: "1",
    title: "about me",
    date: "7/3/2024",
    content: "currently founder & man...",
    icon: "🔴",
  },
  {
    id: "2",
    title: "quick links",
    date: "7/2/2024",
    content: "email inbox zero, always ...",
    icon: "🔗",
  },
  {
    id: "3",
    title: "principles",
    date: "7/1/2024",
    content:
      "• act with urgency\n• do what you say you will\n• show up on time\n• close the loop\n• people remember how you make them feel\n• consistency breeds excellence\n• ship something everyday\n• exercise everyday\n• it's a marathon, not a sprint\n• surround yourself with people who are better than you are\n• make friends on the internet\n• work harder than you think you should\n• if it's under an hour, walk\n• you're not above anything\n• you're not below anything\n• great outfits should be repeated\n• taste is a muscle\n• sweat the details\n• a lot of things matter a little\n• a few things matter a lot",
  },
  {
    id: "4",
    title: "bookmarks",
    date: "6/30/2024",
    content: '"Intensity is the price o...',
    icon: "🔖",
  },
  {
    id: "5",
    title: "fav spots",
    date: "6/28/2024",
    content: "sf akikos sorrel kokkari ...",
    icon: "📍",
  },
  {
    id: "6",
    title: "fav products",
    date: "6/24/2024",
    content: "development stack sup...",
    icon: "👤",
  },
  {
    id: "7",
    title: "on repeat",
    date: "6/20/2024",
    content: "edm/house sultan shep...",
    icon: "🎧",
  },
  {
    id: "8",
    title: "reading list",
    date: "6/14/2024",
    content: "currently reading the s...",
    icon: "📚",
  },
  {
    id: "9",
    title: "inspo",
    date: "7/4/2024",
    content: "people ben böhmer (mu...",
    icon: "✨",
  },
  {
    id: "10",
    title: "groceries",
    date: "6/10/2024",
    content: "i hate cooking, so gene...",
    icon: "🍎",
  },
  {
    id: "11",
    title: "how this works",
    date: "6/1/2024",
    content: "",
    icon: "⚙️",
  },
];

export default function Component() {
  const [selectedNote, setSelectedNote] = useState<Note | null>(notes[2]); // Set "principles" as default selected note

  return (
    <div className="flex h-screen bg-[#1c1c1e] text-[#e5e5e5] font-sans">
      {/* Sidebar */}
      <div className="w-80 bg-[#2c2c2e] border-r border-[#3a3a3c] flex flex-col">
        {/* Search and Edit */}
        <div className="p-2 flex items-center space-x-2 border-b border-[#3a3a3c]">
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
        </div>

        {/* Notes List */}
        <ScrollArea className="flex-grow">
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
