import languages from "./languages";

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
        {languages.map(({ flagUrl, name, id }) => (
          <div className="language-button" onClick={() => onLanguageClick(id)}>
            <img src={flagUrl} className="language-image" />
            <div>{name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LanguageModal;
