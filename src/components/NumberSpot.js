import React from "react";

const NumberSpot = ({ number, isSelected, onClick }) => {
  return (
    <button
      className={`number-spot ${isSelected ? "selected" : ""}`}
      onClick={onClick}
    >
      {number}
    </button>
  );
};

export default NumberSpot;
