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
];
