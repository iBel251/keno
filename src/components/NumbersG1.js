import React from "react";
import { Box, Button } from "@mui/material";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  button: {
    width: "9.5%",
    height: "25px",
    margin: "3px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "50%",
    padding: "2px",
    fontSize: "14px",
    whiteSpace: "nowrap",
  },
};

const NumbersG1 = ({ onSelectNumber, selectedNumbers, gameStarted }) => {
  const numbers = Array.from({ length: 40 }, (_, i) => i + 1);
  const handleNumberClick = (number) => {
    // Invoke the callback with the selected number
    if (!gameStarted) {
      onSelectNumber(number);
    }
  };
  return (
    <Box sx={styles.container}>
      {numbers.map((number) => (
        <Box
          key={number}
          sx={{
            ...styles.button,
            backgroundColor: selectedNumbers?.includes(number)
              ? "orange"
              : "black",
          }}
          onClick={() => handleNumberClick(number)}
        >
          {number}
        </Box>
      ))}
    </Box>
  );
};

export default NumbersG1;
