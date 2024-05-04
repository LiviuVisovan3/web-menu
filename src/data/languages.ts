export type LanguageCode = "ro" | "en" | "fr" | "es" | "de";

type Language = { id: LanguageCode; name: string; flagUrl: string };

const languageList: Language[] = [
  { id: "ro", name: "Romana", flagUrl: "./images/romana.png" },
  { id: "en", name: "Engleza", flagUrl: "./images/engleza.png" },
  { id: "fr", name: "Franceza", flagUrl: "./images/franceza.png" },
  { id: "es", name: "Spaniola", flagUrl: "./images/spaniola.png" },
  { id: "de", name: "Germana", flagUrl: "./images/germana.png" },
];

export default languageList;
