import { Note } from "./types";

export function noteIn(timeframe: string, note: Note) {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);
  const lastWeek = new Date(today);
  lastWeek.setDate(lastWeek.getDate() - 7);
  const noteDate = new Date(note.date);
  switch (timeframe) {
    case "today":
      return noteDate.toDateString() === today.toDateString();
    case "yesterday":
      return noteDate.toDateString() === yesterday.toDateString();
    case "lastWeek":
      return noteDate >= lastWeek;
    default:
      return false;
  }
}
