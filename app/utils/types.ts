export type Note = {
  id: string;
  title: string;
  date: string;
  content: string;
  category?: string;
  icon?: string;
};

export const notes: Note[] = [
  {
    id: "1",
    title: "About Me",
    date: "10/12/2024",
    content:
      "Masters student at Politecnico di Torino studying software design with a focus on building secure and performant systems. Passionate about data science, deep learning, and full-stack development.",
    icon: "👨‍🎓",
  },
  {
    id: "2",
    title: "Experience",
    date: "10/12/2024",
    content:
      "Full Stack Engineer at Le Stud, Software Engineer Intern at Acernis, Machine Learning Engineer at Hera-MI, Data Analyst Intern at SADET SA.",
    icon: "💼",
  },
  {
    id: "3",
    title: "Skills",
    date: "10/12/2024",
    content:
      "Front-End Development, React Native, Engineering, Machine Learning, Deep Learning, Data Science.",
    icon: "🛠️",
  },
  {
    id: "4",
    title: "Education",
    date: "10/12/2024",
    content:
      "Politecnico di Torino (Master's in Computer Engineering), Centrale Nantes (Data Science), Lycée Mohammed VI d'Excellence (Sciences & Tech).",
    icon: "🎓",
  },
  {
    id: "5",
    title: "Projects",
    date: "10/12/2024",
    content:
      "Machine learning for 3D object clustering, U-Net model for prostate segmentation, sales tracking dashboard with Power BI.",
    icon: "📂",
  },
  {
    id: "6",
    title: "Contact",
    date: "10/12/2024",
    content: "Email: jaouadouchaib@gmail.com, Phone: +212 6 99 99 99 99",
    icon: "📞",
  },
  {
    id: "7",
    title: "Certifications",
    date: "10/12/2024",
    content:
      "Deep Learning Specialization (Coursera), Full Stack Web Development (freeCodeCamp), Data Science MicroMasters (edX).",
    icon: "📜",
  },
  {
    id: "8",
    title: "Languages",
    date: "10/12/2024",
    content:
      "Arabic (Native), French (Fluent), English (Fluent), Italian (Intermediate).",
    icon: "🌐",
  },
  {
    id: "9",
    title: "Hobbies",
    date: "10/12/2024",
    content: "Reading, Writing, Traveling, Swimming, Playing Chess.",
    icon: "🎮",
  },
  {
    id: "10",
    title: "Volunteering",
    date: "10/12/2024",
    content: "Volunteer at the Red Crescent, Member of the IEEE.",
    icon: "🤝",
  },
  {
    id: "11",
    title: "Achievements",
    date: "10/12/2024",
    content:
      "1st Place in the IEEE Student Paper Contest, 2nd Place in the National Olympiad of Informatics.",
    icon: "🏆",
  },
];
