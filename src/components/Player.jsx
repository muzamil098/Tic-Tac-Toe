import React from "react";
import { useState } from "react";
export default function Player({ initialName, symbol, isActive }) {
  const [isEditing, setIsEditing] = useState(false);
  const [playerName, setPlayerName] = useState(initialName);
  const handleEditClick = () => {
    // setIsEditing(!isEditing); // => Schedules the state update to true
    // setIsEditing(!isEditing); // => Schedules the state update to true as well
    // but if you use the function insite the setIsEditing, it will get the latest state value as parameter;
    // Using function form is the best practice as you will always get the latest state value
    setIsEditing((editing) => !editing); // => This will gain the latest value of the state, returns false
    // setIsEditing((editing) => !editing); // => This will gain the latest value of the state, returns true
  };
  const onChangeHandler = (e) => {
    setPlayerName(e.target.value);
  };
  let editablePlayerName = <span className="player-name">{playerName}</span>;
  if (isEditing) {
    editablePlayerName = (
      <input
        type="text"
        required
        value={playerName}
        onChange={onChangeHandler}
      />
    );
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}
