import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1000
};

const illustration = {
  animated: true
};

const greeting = {
  fr: {
    username: "Gabin Dehu",
    title: "Étudiant en Génie Informatique",
    subTitle:
      "Je suis à la recherche d'un stage assistant ingénieur de 6 mois en Développement Logiciel (Software Engineering) à partir de septembre/août 2026. Je suis intéressé par l'ingénierie des données, l'algorithmique et les architectures Backend.",
    resumeLink: "/CV_DEHU_Gabin.pdf",
    displayGreeting: true
  },
  en: {
    username: "Gabin Dehu",
    title: "Computer Engineering Student",
    subTitle:
      "I am looking for a 6-month software engineering internship starting in August/September 2026. I am interested in data engineering, algorithms, and Backend architectures.",
    resumeLink: "/CV_DEHU_Gabin_eng.pdf",
    displayGreeting: true
  }
};

const socialMediaLinks = {
  github: "https://github.com/gabindehu",
  linkedin: "https://www.linkedin.com/in/gabin-dehu-385368361/",
  gmail: "gabdehu@gmail.com",
  display: true
};

const skillsSection = {
  fr: {
    title: "Mes compétences",
    subTitle:
      "Intéressé par le développement logiciel (Backend), l'ingénierie des données et l'algorithmique. Je conçois des systèmes robustes, optimisés et évolutifs.",
    skills: [
      "- Programmation Orientée Objet (Java, C++) et architecture d'applications Client-Serveur",
      "- Modélisation et gestion de bases de données relationnelles avancées (SQL, PostgreSQL)",
      "- Développement Web et conception d'API REST (Python/Flask, Node.js, React)",
      "- Programmation système, gestion de la mémoire (C/C++) et administration d'environnements Linux",
      "- Algorithmique avancée, mathématiques appliquées et Intelligence Artificielle (Python, Lisp)",
      "- Simulation et modélisation mathématique en environnement 3D (Three.js)",
      emoji(
        "🌍 Langues : Français (Natif) | Anglais (C1 - Courant) | Espagnol (B1 - Intermédiaire)"
      )
    ],
    softwareSkills: [
      {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
      {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
      {skillName: "C/C++", fontAwesomeClassname: "fas fa-code"},
      {skillName: "SQL/PostgreSQL", fontAwesomeClassname: "fas fa-database"},
      {skillName: "Linux/SysAdmin", fontAwesomeClassname: "fas fa-terminal"},
      {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
      {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
      {skillName: "NodeJS", fontAwesomeClassname: "fab fa-node-js"},
      {skillName: "React", fontAwesomeClassname: "fab fa-react"}
    ],
    display: true
  },
  en: {
    title: "My Skills",
    subTitle:
      "Interested in software development (Backend), data engineering, and algorithms. I design robust, optimized, and scalable systems.",
    skills: [
      "- Object-Oriented Programming (Java, C++) and Client-Server application architecture",
      "- Advanced relational database modeling and management (SQL, PostgreSQL)",
      "- Web development and REST API design (Python/Flask, Node.js, React)",
      "- System programming, memory management (C/C++) and Linux environment administration",
      "- Advanced algorithms, applied mathematics and Artificial Intelligence (Python, Lisp)",
      "- Mathematical simulation and modeling in 3D environment (Three.js)",
      emoji(
        "🌍 Languages: French (Native) | English (C1 - Fluent) | Spanish (B1 - Intermediate)"
      )
    ],
    softwareSkills: [
      {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
      {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
      {skillName: "C/C++", fontAwesomeClassname: "fas fa-code"},
      {skillName: "SQL/PostgreSQL", fontAwesomeClassname: "fas fa-database"},
      {skillName: "Linux/SysAdmin", fontAwesomeClassname: "fas fa-terminal"},
      {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
      {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
      {skillName: "NodeJS", fontAwesomeClassname: "fab fa-node-js"},
      {skillName: "React", fontAwesomeClassname: "fab fa-react"}
    ],
    display: true
  }
};

const techStack = {
  viewSkillBars: false,
  experience: [
    {
      Stack: "C",
      progressPercentage: "60%"
    },
    {
      Stack: "SQL (PostgreSQL)",
      progressPercentage: "60%"
    },
    {
      Stack: "Java",
      progressPercentage: "50%"
    },
    {
      Stack: "Python",
      progressPercentage: "50%"
    },
    {
      Stack: "SysAdmin / Linux",
      progressPercentage: "40%"
    },
    {
      Stack: "Lisp",
      progressPercentage: "10%"
    },
    {
      Stack: "Three.js",
      progressPercentage: "30%"
    },
    {
      Stack: "Javascript",
      progressPercentage: "30%"
    },
    {
      Stack: "Git",
      progressPercentage: "40%"
    },
    {
      Stack: "React",
      progressPercentage: "25%"
    }
  ]
};

const educationInfo = {
  fr: {
    display: true,
    schools: [
      {
        schoolName: "Université de Technologie de Compiègne (UTC)",
        subHeader: "Diplôme d'ingénieur en Génie Informatique",
        duration: "2025 - Aujourd'hui",
        desc: "Formation d'ingénieur généraliste en informatique. Approfondissement en statistiques, ingénierie des données, systèmes d'exploitation, bases de données et intelligence artificielle.",
        logo: require("./assets/images/utcLogo.png")
      },
      {
        schoolName: "Université de Bourgogne",
        subHeader: "Licence 2 Maths/Informatique",
        duration: "2023 - 2025",
        desc: "Formation scientifique avec spécialisation en mathématiques et informatique.",
        logo: require("./assets/images/ubLogo.png")
      },
      {
        schoolName: "Lycée Carnot, Dijon",
        subHeader: "CPGE MPSI",
        duration: "2022 - 2023",
        desc: "Classe préparatoire aux grandes écoles en mathématiques et physique.",
        logo: require("./assets/images/lyceeCarnotLogo.png")
      },
      {
        schoolName: "Lycée Notre-Dame, Dijon",
        duration: "2020 - 2022",
        desc: "Baccalauréat série générale mention TB",
        logo: require("./assets/images/lyceeNotreDameLogo.png")
      }
    ]
  },
  en: {
    display: true,
    schools: [
      {
        schoolName: "Compiègne University of Technology (UTC)",
        subHeader: "Engineering degree in Computer Engineering",
        duration: "2025 - Today",
        desc: "Generalist engineering training in computer science. Deepening in statistics, data engineering, operating systems, databases, and artificial intelligence.",
        logo: require("./assets/images/utcLogo.png")
      },
      {
        schoolName: "University of Burgundy",
        subHeader: "Bachelor in Maths/Computer Science",
        duration: "2023 - 2025",
        desc: "Scientific training with specialization in mathematics and computer science.",
        logo: require("./assets/images/ubLogo.png")
      },
      {
        schoolName: "Lycée Carnot, Dijon",
        subHeader: "CPGE MPSI",
        duration: "2022 - 2023",
        desc: "Preparatory class for engineering schools in mathematics and physics.",
        logo: require("./assets/images/lyceeCarnotLogo.png")
      },
      {
        schoolName: "Lycée Notre-Dame, Dijon",
        duration: "2020 - 2022",
        desc: "General Baccalaureate with high honors",
        logo: require("./assets/images/lyceeNotreDameLogo.png")
      }
    ]
  }
};

const workExperiences = {
  fr: {
    display: true,
    experience: [
      {
        role: "Agent Agricole",
        company: "Institut Agro Dijon",
        companylogo: require("./assets/images/institutAgroDijonLogo.png"),
        date: "Juillet - Août 2023",
        desc: "Récolte de plants de plusieurs variétés de moutarde destinées à la recherche agronomique (Battage/Nettoyage/PMG)"
      },
      {
        role: "Intérimaire",
        company: "Reine de Dijon",
        companylogo: require("./assets/images/reineDijonLogo.png"),
        date: "Juin - Août 2024 / Juin - Août 2025",
        desc: "Assistance aux conducteurs de ligne dans le conditionnement de moutarde et la production de sauces."
      }
    ]
  },
  en: {
    display: true,
    experience: [
      {
        role: "Agricultural Worker",
        company: "Institut Agro Dijon",
        companylogo: require("./assets/images/institutAgroDijonLogo.png"),
        date: "July - August 2023",
        desc: "Harvesting several varieties of mustard plants for agronomic research (Threshing/Cleaning/1000-kernel weight)"
      },
      {
        role: "Temp Worker",
        company: "Reine de Dijon",
        companylogo: require("./assets/images/reineDijonLogo.png"),
        date: "June - August 2024 / June - August 2025",
        desc: "Assistance to line operators in mustard packaging and sauce production."
      }
    ]
  }
};

const bigProjects = {
  fr: {
    title: "Projets",
    subtitle: "Projets développés dans le cadre universitaire et personnel",
    projects: [
      {
        projectName: "Conseiller Sportif",
        projectDesc:
          "Application web couplant une interface (Python/Flask + Frontend) avec un Système Expert d'ordre 0+ développé en Common Lisp (SBCL).",
        technologies: ["Lisp", "Python", "JavaScript"],
        footerLink: [
          {
            name: "GitHub",
            url: "https://github.com/gabindehu/ConseillerSportif"
          }
        ]
      },
      {
        projectName: "Base de Données Orientée Objet en Java",
        projectDesc:
          "Système de gestion d'objets en Java avec persistance des données en JSON via Jackson. Le projet démontre une compréhension approfondie de la sérialisation.",
        technologies: ["Java", "JSON", "Jackson"],
        footerLink: [
          {
            name: "GitHub",
            url: "https://github.com/gabindehu/ObjetDB"
          }
        ]
      },
      {
        projectName: "Base de Données Péage",
        projectDesc:
          "Base de données PostgreSQL simulant la gestion de péages d'autoroute. Le projet inclut la modélisation des données, la création de requêtes complexes et l'optimisation des performances.",
        technologies: ["PostgreSQL", "SQL", "Modélisation"],
        footerLink: [
          {
            name: "GitHub",
            url: "https://github.com/gabindehu/Base-de-Donnee-Peage"
          }
        ]
      },
      {
        projectName: "Simulation de Croquet en 3D",
        projectDesc:
          "Simulation d'un lancer de balle en 3D avec Three.js, intégrant des courbes de Bézier pour modéliser les trajectoires. Ce projet démontre ma capacité à combiner mathématiques et programmation pour créer des visualisations interactives.",
        technologies: ["Three.js", "JavaScript", "Mathématiques"],
        footerLink: [
          {
            name: "GitHub",
            url: "https://github.com/gabindehu/Simulation-de-Croquet-en-3D"
          }
        ]
      },
      {
        projectName: "Jeu de plateau",
        projectDesc:
          "Jeu de stratégie sur grille développé en Java avec une architecture orientée objet. Le projet inclut la gestion d'objets, d'obstacles et un système de règles complexes.",
        technologies: ["Java", "POO"],
        footerLink: [
          {name: "GitHub", url: "https://github.com/gabindehu/Jeu-de-plateau"}
        ]
      },
      {
        projectName: "Portfolio en ligne",
        projectDesc:
          "Portfolio professionnel développé avec React, mettant en avant mes compétences en développement web et en design d'interface utilisateur.",
        technologies: ["React", "JavaScript", "SCSS"],
        footerLink: [
          {
            name: "GitHub",
            url: "https://github.com/gabindehu/gabindehu.github.io"
          }
        ]
      }
    ],
    display: true
  },
  en: {
    title: "Projects",
    subtitle: "Projects developed in academic and personal contexts",
    projects: [
      {
        projectName: "Sports Advisor",
        projectDesc:
          "Web application coupling an interface (Python/Flask + Frontend) with a 0+ order Expert System developed in Common Lisp (SBCL).",
        technologies: ["Lisp", "Python", "JavaScript"],
        footerLink: [
          {
            name: "GitHub",
            url: "https://github.com/gabindehu/ConseillerSportif"
          }
        ]
      },
      {
        projectName: "Object-Oriented Database in Java",
        projectDesc:
          "Object-oriented database management system featuring a client-server network architecture with concurrency management. Uses JSON serialization/deserialization to ensure data persistence.",
        technologies: ["Java", "JSON", "Jackson"],
        footerLink: [
          {
            name: "GitHub",
            url: "https://github.com/gabindehu/ObjetDB"
          }
        ]
      },
      {
        projectName: "Highway Toll Management System",
        projectDesc:
          "PostgreSQL database simulating highway toll management. The project includes data modeling, creation of complex queries, and performance optimization.",
        technologies: ["PostgreSQL", "SQL", "Modeling"],
        footerLink: [
          {
            name: "GitHub",
            url: "https://github.com/gabindehu/Base-de-Donnee-Peage"
          }
        ]
      },
      {
        projectName: "3D Croquet Simulation",
        projectDesc:
          "Simulation of a ball throw in 3D with Three.js, integrating Bézier curves to model trajectories. This project demonstrates my ability to combine mathematics and programming to create interactive visualizations.",
        technologies: ["Three.js", "JavaScript", "Mathematics"],
        footerLink: [
          {
            name: "GitHub",
            url: "https://github.com/gabindehu/Simulation-de-Croquet-en-3D"
          }
        ]
      },
      {
        projectName: "Board Game",
        projectDesc:
          "Grid-based strategy game developed in Java with an object-oriented architecture. The project includes object management, obstacles, and a complex rules system.",
        technologies: ["Java", "OOP"],
        footerLink: [
          {name: "GitHub", url: "https://github.com/gabindehu/Jeu-de-plateau"}
        ]
      },
      {
        projectName: "Online Portfolio",
        projectDesc:
          "Professional portfolio developed with React, highlighting my web development and UI design skills.",
        technologies: ["React", "JavaScript", "SCSS"],
        footerLink: [
          {
            name: "GitHub",
            url: "https://github.com/gabindehu/gabindehu.github.io"
          }
        ]
      }
    ],
    display: true
  }
};

const contactInfo = {
  fr: {
    title: emoji("Contact ☎️"),
    number: "07 83 58 23 62",
    email_address: "gabdehu@gmail.com"
  },
  en: {
    title: emoji("Contact ☎️"),
    number: "+33 7 83 58 23 62",
    email_address: "gabdehu@gmail.com"
  }
};

const isHireable = false;
const openSource = {display: false};
const achievementSection = {display: false};
const blogSection = {display: false};
const talkSection = {display: false};
const resumeSection = {display: false};
const podcastSection = {display: false};
const twitterDetails = {display: false};

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  contactInfo,
  isHireable,
  openSource,
  achievementSection,
  blogSection,
  talkSection,
  resumeSection,
  podcastSection,
  twitterDetails,
  techStack
};
