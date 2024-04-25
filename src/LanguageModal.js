import languageData from "./languageData";

function LanguageModal({ onLanguageClick, onCloseClick }) {
  return (
    <>
      <div className="modal-window"></div>
      <div className="modal">
        <div className="menu-header">
          <div className="language-menu">Menu language</div>
          <div className="close-image-wrapper" onClick={onCloseClick}>
            <img src="./images/close.png" className="close-image" />
          </div>
        </div>
        {languageData.languages.map((language) => (
          <div
            className="language-button"
            onClick={() => onLanguageClick(language.id)}
          >
            <img src={language.flagUrl} className="language-image" />
            <div>{language.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LanguageModal;
