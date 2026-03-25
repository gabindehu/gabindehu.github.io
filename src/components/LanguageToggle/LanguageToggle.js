import React, {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import emoji from "react-easy-emoji";
import "./LanguageToggle.scss";

const LanguageToggle = () => {
  const {isEnglish} = useContext(StyleContext);

  return (
    <div className="language-toggle-container">
      <span className="language-emoji">
        {isEnglish ? emoji("🇫🇷") : emoji("🇬🇧")}
      </span>
    </div>
  );
};
export default LanguageToggle;
