import React, { JSX, useState } from "react";
import { FaShoppingCart, FaUtensils, FaTrain } from "react-icons/fa";
import { startConversationWithText } from "../services/apiService";
import RolePlayPage from "../RolePlayPage/RolePlayPage";
import Button from "../common/Button";
import Icon from "../common/Icon";
import "./ScenarioSelector.css";

// Interface pour les scénarios
interface Scenario {
  name: string;
  icon: JSX.Element;
}

const ScenarioSelector: React.FC = () => {
  const [selectedScenario, setSelectedScenario] = useState<string | null>(null);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const [germanText, setGermanText] = useState<string>("");
  const [englishText, setEnglishText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showRolePlayPage, setShowRolePlayPage] = useState<boolean>(false);

  // Liste des scénarios
  const scenarios: Scenario[] = [
    { name: "supermarket", icon: <FaShoppingCart /> },
    { name: "restaurant", icon: <FaUtensils /> },
    { name: "train station", icon: <FaTrain /> },
  ];

  // Fonction pour sélectionner un scénario
  const handleScenarioSelect = (scenario: string) => {
    setSelectedScenario(scenario);
  };

  // Fonction pour démarrer le jeu de rôle
  const handleStartRolePlay = async () => {
    if (!selectedScenario) {
      alert("Please select a scenario first.");
      return;
    }

    setIsLoading(true);

    try {
      // Appel à l'API pour obtenir l'audio et les textes
      const { audio, germanText, englishText } = await startConversationWithText(
        selectedScenario
      );
      const audioUrl = URL.createObjectURL(audio);

      // Mettre à jour les états avec les données reçues
      setAudioSrc(audioUrl);
      setGermanText(germanText);
      setEnglishText(englishText);

      // Afficher la page de jeu de rôle
      setShowRolePlayPage(true);
    } catch (error) {
      console.error("Error starting role play:", error);
      alert("Failed to start role play. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="scenario-selector">
      <div>
        <img src="/logo.png" alt="Logo" className="logo" />
      </div>
      <h2>Choose your scenario</h2>
      <div className="scenario-buttons">
        {scenarios.map((scenario, index) => (
          <Button
            key={index}
            className={`scenario-button ${
              selectedScenario === scenario.name ? "selected" : ""
            }`}
            onClick={() => handleScenarioSelect(scenario.name)}
          >
            <Icon
              icon={scenario.icon}
              color={selectedScenario === scenario.name ? "#FF4081" : "#007bff"}
            />
            <span>{scenario.name}</span>
          </Button>
        ))}
      </div>

      <Button
        className="start-button"
        onClick={handleStartRolePlay}
        disabled={isLoading}
      >
        {isLoading ? "Loading..." : "Start Role-play"}
      </Button>

      {showRolePlayPage && (
        <RolePlayPage
          selectedScenario={selectedScenario}
          audioSrc={audioSrc}
          german={germanText}
          english={englishText}
        />
      )}
    </div>
  );
};

export default ScenarioSelector;