import languages, { LanguageCode } from "../data/languages";
import React from "react";

type Props = {
  onLanguageClick: (id: LanguageCode) => void;
  onCloseClick: () => void;
};

function LanguageModal({ onLanguageClick, onCloseClick }: Props) {
  return (
    <>
      <div className="modal-backdrop"></div>
      <div className="modal">
        <div className="menu-header">
          <div className="language-menu">Menu language</div>
          <div className="close-image-wrapper" onClick={onCloseClick}>
            <img src="./images/close.png" className="close-image" />
          </div>
        </div>
        {languages.map((x) => (
          <div
            className="language-button"
            onClick={() => onLanguageClick(x.id)}
          >
            <img src={x.flagUrl} className="language-image" />
            <div>{x.name}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export default LanguageModal;
