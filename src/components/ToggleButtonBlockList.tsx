import "../utils/models/fetchPokemon.css";
import "../style.css";
import "./ToggleButtonBlockList.css";
import { FaThList } from "react-icons/fa";
import { TfiLayoutColumn3Alt } from "react-icons/tfi";
import { useState } from "react";

type Mode = "list" | "block";

interface ToggleButtonBlockListProps {
  onChangeMode: (mode: Mode) => void;
}

export const ToggleButtonBlockList = ({
  onChangeMode,
}: ToggleButtonBlockListProps) => {
  const [mode, setMode] = useState<Mode>("list");

  const handleClick = () => {
    const newMode = mode === "list" ? "block" : "list";
    setMode(newMode);
    onChangeMode(newMode);
  };
  return (
    <>
      <div className="buttonListBlockContainer">
        <button className="buttonListBlock" onClick={handleClick}>
          {mode === "list" ? (
            <TfiLayoutColumn3Alt style={{ color: "var(--color-dark-blue)" }} />
          ) : (
            <FaThList style={{ color: "var(--color-dark-blue)" }} />
          )}
        </button>
      </div>
    </>
  );
};
