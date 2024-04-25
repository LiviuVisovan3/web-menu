import "./App.css";
import { useState, useEffect } from "react";
import data from "./data.js";
import LanguageModal from "./LanguageModal.js";
import languages from "./languages.js";

function App() {
  const { sections } = data;

  const [selectedSectionIndex, setSelectedSectionIndex] = useState(0);
  const [selectedSectionId, setSelectedSectionId] = useState(sections[0].id);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState();
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("ro");
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleSectionChange(section, index) {
    setSelectedCategoryIndex();
    setSelectedSectionIndex(index);
    setSelectedSectionId(section.id);
  }

  return (
    <div className="App">
      {isModalOpen && (
        <LanguageModal
          onLanguageClick={(id) => {
            setLanguage(id);
            setIsModalOpen(false);
          }}
          onCloseClick={() => setIsModalOpen(false)}
        />
      )}
      <div className="page-header">
        <div className="corner-buttons">
          <div className="button" onClick={() => setIsModalOpen(true)}>
            <img
              src={languages.find((x) => x.id === language).flagUrl}
              alt={languages.find((x) => x.id === language).name}
            />
          </div>

          <div className="button">
            <div className="dot-wrapper">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
          </div>
        </div>
        <div className="gradient"></div>
        <img className="cover-photo" src="/restaurant.png" alt="restaurant" />
        <div className="logo-wrapper">
          <img src="logo-nature.webp" alt="menu logo" />
        </div>
        <h1>Demo Restaurant</h1>
        <h3>MENIU</h3>
      </div>
      <div className="search-wrapper">
        <div className="input-wrapper">
          <img src="search.svg" alt="search" />
          <input
            placeholder="Cauta"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="section-picker">
        <div
          className="slider"
          style={{
            left: `${selectedSectionIndex * (100 / sections.length)}%`,
          }}
        ></div>
        {sections.map((section, index) => (
          <div
            className="section"
            onClick={() => handleSectionChange(section, index)}
          >
            {section.name[language]}
          </div>
        ))}
      </div>
      <div className="category-picker">
        {sections
          .find((x) => x.id === selectedSectionId)
          .categories.filter((x) =>
            x.names[language].toLowerCase().startsWith(query)
          )
          .map((category, index) => (
            <div
              className={`category-button ${
                selectedCategoryIndex === index ? "selected" : ""
              }`}
              onClick={() => setSelectedCategoryIndex(index)}
            >
              <img src={category.imgUrl} alt="mic dejun" />
              <span>{category.names[language]}</span>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
