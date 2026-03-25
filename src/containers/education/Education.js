import React, {useContext} from "react";
import "./Education.scss";
import EducationCard from "../../components/educationCard/EducationCard";
import {educationInfo} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Education() {
  const {isEnglish} = useContext(StyleContext);
  const educationData = isEnglish ? educationInfo.en : educationInfo.fr;

  if (educationData.display) {
    return (
      <div className="education-section" id="education">
        <h1 className="education-heading">
          {isEnglish ? "Education" : "Éducation"}
        </h1>
        <div className="education-card-container">
          {educationData.schools.map((school, index) => (
            <EducationCard key={index} school={school} />
          ))}
        </div>
      </div>
    );
  }
  return null;
}
