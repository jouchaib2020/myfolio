export type Note = {
  id: string;
  title: string;
  date: string;
  content: string;
  category?: string;
  icon?: string;
};

export function getNotes(): Note[] {
  // In a real app, you'd fetch this data from a database
  return [
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
}
