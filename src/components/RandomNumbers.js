import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

const styles = {
  container: {
    width: "35%",
    height: "180px",
    border: "2px solid orange",
    background: "black",
    color: "white",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  selectedNumber: {
    background: "blue",
    margin: "2px",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    padding: "3px",
  },
  selectedNumberHighlight: {
    background: "red", // Change background to red for selected numbers
  },
};

const RandomNumbers = ({
  numbers,
  selectedNumbers,
  setGameStarted,
  payout,
  balance,
  setBalance,
}) => {
  const [displayedNumbers, setDisplayedNumbers] = useState([]);

  useEffect(() => {
    // Delay each number by one second
    const delay = 250; // 0.25 second

    // Clear displayedNumbers after each render
    setDisplayedNumbers([]);

    const addNumberWithDelay = async (number, index) => {
      // Use setTimeout to simulate a delay
      await new Promise((resolve) => setTimeout(resolve, index * delay));
      setDisplayedNumbers((prevDisplayedNumbers) => [
        ...prevDisplayedNumbers,
        number,
      ]);
    };

    // Loop through numbers and add them with a delay
    numbers.forEach((number, index) => {
      addNumberWithDelay(number, index);
    });

    // Set gameStarted to false after the animation is complete
    setTimeout(() => {
      setGameStarted(false);
    }, numbers.length * delay);
  }, [numbers]);

  useEffect(() => {
    // Update balance immediately after the animation is complete
    if (payout) {
      setBalance((prevBalance) => prevBalance + payout);
      console.log("payout is:", payout);
    }
  }, [payout, setBalance]);

  // Check if numbers is not an array or is empty
  if (!Array.isArray(numbers) || numbers.length === 0) {
    return (
      <Box sx={styles.container}>
        <div>Click on the start button after selecting 3 or more numbers.</div>
      </Box>
    );
  }

  return (
    <Box sx={styles.container}>
      {displayedNumbers.map((number) => (
        <Box
          key={number}
          sx={{
            ...styles.selectedNumber,
            ...(selectedNumbers.includes(number) &&
              styles.selectedNumberHighlight),
          }}
        >
          {number}
        </Box>
      ))}
    </Box>
  );
};

export default RandomNumbers;
