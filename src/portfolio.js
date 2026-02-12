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
  username: "Gabin Dehu",
  title: "Élève-Ingénieur en Génie Informatique",
  subTitle: emoji(
    "Intéressé par les nouvelles technologies, j'étudie actuellement le Génie Informatique à l'Université de Technologie de Compiègne (UTC)."
  ),
  resumeLink: "/CV_DEHU_Gabin.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/gabindehu",
  linkedin: "https://www.linkedin.com/in/gabin-dehu-385368361/",
  gmail: "gabdehu@gmail.com",
  display: true
};

const skillsSection = {
  title: "Ce que je fais",
  subTitle:
    "Futur ingénieur passionné par le développement logiciel, l'administration système et les technologies innovantes.",
  skills: [
    emoji("⚡ Programmation orientée objet et développement de jeux en Java"),
    emoji("⚡ Administration système, scripting et gestion d'environnements Linux"),
    emoji("⚡ Gestion de bases de données relationnelles avancées avec SQL et PostgreSQL"),
    emoji("⚡ Programmation fonctionnelle et IA symbolique en Lisp"),
    emoji("⚡ Programmation système et gestion de la mémoire en langage C"),
    emoji(
      "⚡ Simulation et modélisation 3D en Three.js en utilisant des modèles mathématiques"
    ),
    emoji(
      "⚡ Création de projets web modernes (React, Node.js)"
    )
  ],
  softwareSkills: [
    {skillName: "C", fontAwesomeClassname: "fas fa-code"},
    {skillName: "SQL/PostgreSQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "SysAdmin", fontAwesomeClassname: "fas fa-terminal"},
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "Three.js", fontAwesomeClassname: "fas fa-cube"},
    {skillName: "NodeJS", fontAwesomeClassname: "fab fa-node-js"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git"}
  ],
  display: true
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "C",
      progressPercentage: "60%" // Augmenté suite à votre pratique récente
    },
    {
      Stack: "SQL (PostgreSQL)",
      progressPercentage: "60%" // Augmenté
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
      progressPercentage: "40%" // Nouvelle compétence
    },
    {
      Stack: "Lisp",
      progressPercentage: "40%" // Nouvelle compétence
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
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Université de Technologie de Compiègne (UTC)",
      subHeader: "Diplôme d'ingénieur en Génie Informatique",
      duration: "2024 - Aujourd'hui", // Ajustez l'année de début si nécessaire (ex: sept 2024)
      desc: "Formation d'ingénieur généraliste en informatique (GI). Approfondissement en algorithmique, systèmes d'exploitation, bases de données et intelligence artificielle.",
      logo: require("./assets/images/utcLogo.png") // Assurez-vous d'ajouter le logo de l'UTC dans vos assets ou gardez un logo générique
    },
    {
      schoolName: "Université de Bourgogne",
      subHeader: "Licence 2 Maths/Informatique",
      duration: "2023 - 2024",
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
};

const workExperiences = {
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
      date: "Juin - Août 2024",
      desc: "Assistance aux conducteurs de ligne dans le conditionnement de moutarde et la production de sauces."
    }
  ]
};

const bigProjects = {
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
};

const contactInfo = {
  title: emoji("Contact ☎️"),
  number: "07 83 58 23 62",
  email_address: "gabdehu@gmail.com"
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