import React, {useContext} from "react";
import {Fade} from "react-reveal";
//import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark, isEnglish} = useContext(StyleContext);
  const greetingData = isEnglish ? greeting.en : greeting.fr;

  if (!greetingData.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greetingData.title}{" "}
                {/*<span className="wave-emoji">{emoji("👋")}</span>*/}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greetingData.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button
                  text={isEnglish ? "Contact Me" : "Me contacter"}
                  href="#contact"
                />
                {greetingData.resumeLink && (
                  <a
                    href={greetingData.resumeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="download-link-button"
                  >
                    <Button text={isEnglish ? "My Resume" : "Mon CV"} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
