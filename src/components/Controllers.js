import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import {
  generateRandomNumbers,
  generateQuickPickNumbers,
  calculatePayout,
  matchCounter,
} from "./KenoFunctions";

const styles = {
  container: {
    width: "100%",
    background: "black",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  betController: {
    width: "100%",
    padding: "0px",
    background: "gray",
    color: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  amountBox: {
    fontSize: "24px",
    margin: "1px",
  },
  button: {
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "50%",
    background: "red",
    padding: "5px",
    width: "20px",
    fontStyle: "bold",
    color: "black",
    margin: "0 10px",
  },
  btnControllers: {
    width: "98%",
    display: "flex",
    justifyContent: "space-between",
    margin: "5px",
  },
};

export const Controllers = ({
  amount,
  setAmount,
  balance,
  setBalance,
  setGeneratedNumbers,
  generatedNumbers,
  gameStarted,
  setGameStarted,
  selectedNumbers,
  setSelectedNumbers,
  setDialogueTitle,
  setModalContent,
  setOpenModal,
  setMatchingNumbers,
}) => {
  const handleIncrease = () => {
    if (!gameStarted) {
      if (amount < 20) {
        setAmount(amount + 1);
      } else if (amount < 50) {
        setAmount(amount + 5);
      } else if (amount < 100) {
        setAmount(amount + 10);
      }
    }
  };

  const handleDecrease = () => {
    if (!gameStarted) {
      if (amount > 50) {
        setAmount(amount - 10);
      } else if (amount > 20) {
        setAmount(amount - 5);
      } else if (amount > 1) {
        setAmount(amount - 1);
      }
    }
  };

  const handleQuickpick = () => {
    if (!gameStarted) {
      const quickPickNumbers = generateQuickPickNumbers();
      setSelectedNumbers(quickPickNumbers);
    }
  };

  const handleWipeCard = () => {
    if (!gameStarted) {
      setSelectedNumbers([]);
      setGeneratedNumbers([]);
    }
  };

  const handleStart = () => {
    if (!gameStarted && selectedNumbers.length > 2) {
      // Add logic for Start button
      const randomNumbers = generateRandomNumbers();
      setGeneratedNumbers(randomNumbers);
      setGameStarted(true);
      setBalance(balance - amount);
    } else if (selectedNumbers.length < 3) {
      setDialogueTitle("ይቅርታ!");
      setModalContent("ዙር ለማስጀመር ከ 3 እስከ 10 የሚደርሱ ቁጥሮችን መምረጥ ይኖርቦታል።");
      setOpenModal(true);
    }

    const matchingNumbers = matchCounter(generatedNumbers, selectedNumbers);
    setMatchingNumbers(matchingNumbers);
  };

  const handleExit = () => {
    if (!gameStarted) {
      // Add logic for Exit button
    }
  };

  return (
    <Box sx={styles.container}>
      <div>መደብ - </div>
      <Box sx={styles.betController}>
        <Box sx={styles.button} onClick={handleDecrease}>
          -
        </Box>
        <Box sx={styles.amountBox}>{amount} Birr</Box>
        <Box sx={styles.button} onClick={handleIncrease}>
          +
        </Box>
      </Box>
      <Box sx={styles.btnControllers}>
        <Button variant="contained" onClick={handleQuickpick}>
          Quickpick
        </Button>
        <Button variant="contained" onClick={handleWipeCard}>
          Wipe Card
        </Button>
        <Button variant="contained" onClick={handleStart}>
          Start
        </Button>
        <Button variant="contained" onClick={handleExit}>
          Exit
        </Button>
      </Box>
    </Box>
  );
};
