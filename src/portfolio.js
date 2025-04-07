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
  title: "Étudiant en L2 Maths/Informatique",
  subTitle: emoji(
    "Intéressé par les nouvelles technologies, j'étudie actuellement les Mathématiques et l'Informatique à l'Université de Bourgogne"
  ),
  resumeLink: "/CV_DEHU_Gabin.pdf",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/gabindehu",
  linkedin: "", // Ajoute ton lien LinkedIn si disponible
  gmail: "gabdehu@gmail.com",
  display: true
};

const skillsSection = {
  title: "Ce que je fais",
  subTitle:
    "Étudiant en L2 Maths/Informatique passionné par les nouvelles technologies et le développement d'interfaces innovantes.",
  skills: [
    emoji("⚡ Programmation orientée objet et développement de jeux en Java"),
    emoji(
      "⚡ Simulation et modélisation 3D en Three.js en utilisant des modèles mathématiques"
    ),
    emoji("⚡ Gestion de bases de données avec PostgreSQL"),
    emoji("⚡ Algorithmique avancée en Python"),
    emoji("⚡ Gestion de la mémoire en language C"),
    emoji(
      "⚡ Maîtrise des concepts fondamentaux d’un système d’exploitation, comme la gestion des processus ainsi que de la concurrence."
    ),
    emoji(
      "⚡ Création d'un portfolio en ligne sous forme de site statique en React, initialisé à partir d'un projet Node.js configurable."
    )
  ],
  softwareSkills: [
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "C", fontAwesomeClassname: "fas fa-code"},
    {skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "Three.js", fontAwesomeClassname: "fas fa-cube"},
    {skillName: "NodeJS", fontAwesomeClassname: "fab fa-node-js"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git"}
  ],
  display: true
};

const techStack = {
  viewSkillBars: true, // Pour afficher la section
  experience: [
    {
      Stack: "Python",
      progressPercentage: "50%" // Pourcentage de compétence
    },
    {
      Stack: "Java",
      progressPercentage: "40%"
    },
    {
      Stack: "PostgreSQL",
      progressPercentage: "35%"
    },
    {
      Stack: "C",
      progressPercentage: "35%"
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
      progressPercentage: "30%"
    },
    {
      Stack: "React",
      progressPercentage: "15%"
    },
    {
      Stack: "Node.js",
      progressPercentage: "15%"
    }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Université de Bourgogne",
      subHeader: "Licence 2 Maths/Informatique",
      duration: "2023 - Aujourd’hui",
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
      //image: require("./assets/images/chickdor.png"), // Ajoute une image de ton projet si possible
      projectName: "Simulation de Croquet en 3D",
      projectDesc:
        "Simulation d’un lancer de balle en 3D avec Three.js, intégrant des courbes de Bézier pour modéliser les trajectoires.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/gabindehu/Simulation-de-Croquet-en-3D"
        }
      ]
    },
    {
      image: "",
      projectName: "Jeu de plateau",
      projectDesc:
        "Jeu de stratégie sur grille avec gestion d’objets et d’obstacles, développé en Java.",
      footerLink: [
        {name: "GitHub", url: "https://github.com/gabindehu/Jeu-de-plateau"}
      ]
    },
    {
      image: "",
      projectName: "Base de Données Péage",
      projectDesc:
        "Base de Données développée avec le SGBD PostgreSQL simulant la gestion de données liées aux péages d'autoroute.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/gabindehu/Base-de-Donnee-Peage"
        }
      ]
    },
    {
      image: "",
      projectName: "Base de Données Orientée Objet en Java",
      projectDesc:
        "Ce projet Java gère des objets comme une base de données, avec enregistrement en JSON via Jackson.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/gabindehu/ObjetDB"
        }
      ]
    },
    {
      image: "",
      projectName: "Portfolio en ligne",
      projectDesc:
        "Portfolio en ligne sous forme de site statique en React, initialisé à partir d'un projet Node.js configurable.",
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
