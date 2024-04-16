import "./App.css";
import { useState } from "react";

function App() {
  const [selectedSectionIndex, setSelectedSectionIndex] = useState(1);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(1);

  return (
    <div className="App">
      <div className="page-header">
        <div className="corner-buttons">
          <div className="button">
            <img src="/romania-flag.webp" alt="romanian" />
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
          <input placeholder="Cauta" />
        </div>
      </div>
      <div className="section-picker">
        <div
          className="slider"
          style={{ left: `${selectedSectionIndex * 25}%` }}
        ></div>
        <div className="section" onClick={() => setSelectedSectionIndex(0)}>
          Bar
        </div>
        <div className="section" onClick={() => setSelectedSectionIndex(1)}>
          Restaurant
        </div>
        <div className="section" onClick={() => setSelectedSectionIndex(2)}>
          Vinuri
        </div>
        <div className="section" onClick={() => setSelectedSectionIndex(3)}>
          Deserturi
        </div>
      </div>
      <div className="category-picker">
        <div
          className={`category-button ${
            selectedCategoryIndex === 0 ? "selected" : ""
          }`}
          onClick={() => setSelectedCategoryIndex(0)}
        >
          <img src="/mic-dejun.webp" alt="mic dejun" />
          <span>Mic Dejun</span>
        </div>
        <div
          onClick={() => setSelectedCategoryIndex(1)}
          className={`category-button ${
            selectedCategoryIndex === 1 ? "selected" : ""
          }`}
        >
          <img src="/pizza.webp" alt="pizza" />
          <span>Pizza</span>
        </div>
        <div
          className={`category-button ${
            selectedCategoryIndex === 2 ? "selected" : ""
          }`}
          onClick={() => setSelectedCategoryIndex(2)}
        >
          <span>Sosuri</span>
        </div>
        <div
          className={`category-button ${
            selectedCategoryIndex === 3 ? "selected" : ""
          }`}
          onClick={() => setSelectedCategoryIndex(3)}
        >
          <img src="/fel-principal.webp" alt="fel principal" />
          <span>Fel Principal</span>
        </div>
      </div>
    </div>
  );
}

export default App;
