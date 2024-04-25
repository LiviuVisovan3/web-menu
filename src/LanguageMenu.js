import languageData from "./languageData";
import { useState, useEffect } from "react";

function LanguageMenu({ languageChange, prelanguage }) {
  const [currentlanguage, setCurrentLanguage] = useState("");

  function handleLanguageChange(id) {
    languageChange(id);
  }
  function handlesetCurrentLanguage(id) {
    setCurrentLanguage(id);
  }
  useEffect(() => {
    console.log(currentlanguage);
  }, [currentlanguage]);

  return (
    <>
      <div className="modal-window"></div>
      <div className="modal">
        <div className="menu-header">
          <div className="language-menu">Menu language</div>
          <div
            className="close-image-wrapper"
            onClick={() => handleLanguageChange(currentlanguage)}
          >
            <img src="./images/close.png" className="close-image" />
          </div>
        </div>
        {languageData.languages.map((language) => (
          <div
            className="language-button"
            onClick={() => {
              handlesetCurrentLanguage(language.id);
              handleLanguageChange(language.id);
            }}
          >
            <img src={language.flagUrl} className="language-image" />
            <div>{language.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LanguageMenu;
