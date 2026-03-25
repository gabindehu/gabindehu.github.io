import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark, isEnglish} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji(
            isEnglish
              ? "Thank you for taking the time to read my CV."
              : "Merci d'avoir pris le temps de lire mon CV."
          )}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {isEnglish
            ? "Feel free to contact me for any questions."
            : "N'hésitez pas à me contacter pour toute question."}
        </p>
      </div>
    </Fade>
  );
}
