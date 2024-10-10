export type Note = {
  id: string;
  title: string;
  content: string;
};

export function getNotes(): Note[] {
  // In a real app, you'd fetch this data from a database
  return [
    { id: "1", title: "Projects", content: "List of my projects..." },
    { id: "2", title: "Education", content: "My educational background..." },
    { id: "3", title: "Blog", content: "Recent blog posts..." },
    { id: "4", title: "Skills", content: "My technical skills..." },
    { id: "5", title: "Contact", content: "How to reach me..." },
  ];
}
