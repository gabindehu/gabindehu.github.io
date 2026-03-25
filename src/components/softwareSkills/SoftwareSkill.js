import React, {useContext} from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function SoftwareSkill() {
  const {isEnglish} = useContext(StyleContext);
  const skillsData = isEnglish ? skillsSection.en : skillsSection.fr;

  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsData.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <i className={skills.fontAwesomeClassname}></i>
                <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
