import React, {useContext, useState} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import LanguageToggle from "../LanguageToggle/LanguageToggle";
import StyleContext from "../../contexts/StyleContext";
import {
  greeting,
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  resumeSection,
  educationInfo,
  bigProjects
} from "../../portfolio";

function Header() {
  const {isDark, isEnglish, changeLanguage, changeTheme} =
    useContext(StyleContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const viewExperience = isEnglish
    ? workExperiences.en.display
    : workExperiences.fr.display;
  const viewOpenSource = openSource.display;
  const viewSkills = isEnglish
    ? skillsSection.en.display
    : skillsSection.fr.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;
  const viewEducation = isEnglish
    ? educationInfo.en.display
    : educationInfo.fr.display;
  const viewProjects = isEnglish
    ? bigProjects.en.display
    : bigProjects.fr.display;

  const onLanguageChange = () => {
    changeLanguage();
    setMenuOpen(false);
  };

  return (
    <Headroom disable={menuOpen}>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">
            {isEnglish ? greeting.en.username : greeting.fr.username}
          </span>
          <span className="grey-color">/&gt;</span>
        </a>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          checked={menuOpen}
          onChange={() => setMenuOpen(!menuOpen)}
        />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          {viewSkills && (
            <li>
              <a href="#skills" onClick={() => setMenuOpen(false)}>
                {isEnglish ? "Skills" : "Compétences"}
              </a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource" onClick={() => setMenuOpen(false)}>
                {isEnglish ? "Open Source" : "Open Source"}
              </a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements" onClick={() => setMenuOpen(false)}>
                {isEnglish ? "Achievements" : "Accomplissements"}
              </a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs" onClick={() => setMenuOpen(false)}>
                {isEnglish ? "Blogs" : "Blogs"}
              </a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks" onClick={() => setMenuOpen(false)}>
                {isEnglish ? "Talks" : "Talks"}
              </a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume" onClick={() => setMenuOpen(false)}>
                {isEnglish ? "CV" : "CV"}
              </a>
            </li>
          )}
          {viewEducation && (
            <li>
              <a href="#education" onClick={() => setMenuOpen(false)}>
                {isEnglish ? "Education" : "Éducation"}
              </a>
            </li>
          )}
          {viewProjects && (
            <li>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                {isEnglish ? "Projects" : "Projets"}
              </a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience" onClick={() => setMenuOpen(false)}>
                {isEnglish ? "Work Experience" : "Expériences professionnelles"}
              </a>
            </li>
          )}
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              {isEnglish ? "Contact Me" : "Contactez moi"}
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a onClick={onLanguageChange} style={{cursor: "pointer"}}>
              <LanguageToggle />
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a onClick={changeTheme} style={{cursor: "pointer"}}>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}

export default Header;
