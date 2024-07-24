import "../utils/models/fetchPokemon.css";
import "../style.css";
import "./ToggleButtonBlockList.css";
import { FaThList } from "react-icons/fa";
import { PiSquaresFourFill } from "react-icons/pi";
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
        <button
          className={`${"buttonListBlock"} ${
            document.body.classList.contains("dark-theme") ? "dark-theme" : ""
          }`}
          onClick={handleClick}
        >
          {mode === "list" ? (
            <PiSquaresFourFill className="iconBlock" />
          ) : (
            <FaThList className="iconList" />
          )}
        </button>
      </div>
    </>
  );
};
