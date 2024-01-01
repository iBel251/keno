import { Box, Dialog, DialogTitle, DialogContent, Button } from "@mui/material";
import React, { useState, useEffect } from "react";
import TopSection from "./TopSection";
import NumbersG1 from "./NumbersG1";
import NumbersG2 from "./NumbersG2";
import Payout from "./Payout";
import RandomNumbers from "./RandomNumbers";
import UserNumbers from "./UserNumbers";
import {
  getKenoMultiplierInfo,
  calculatePayout,
  matchCounter,
} from "./KenoFunctions";
import { Controllers } from "./Controllers";

const styles = {
  container: {
    backgroundColor: "green",
    maxWidth: "500px",
  },

  middleSection: {
    display: "flex",
    justifyContent: "space-evenly",
  },
};

const Board = ({ setActiveComponent }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [balance, setBalance] = useState(100);
  const [payoutDetails, setPayoutDetails] = useState();
  const [payout, setPayout] = useState();
  const [amount, setAmount] = useState(10);
  const [generatedNumbers, setGeneratedNumbers] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalContent, setModalContent] = useState("");
  const [dialogueTitle, setDialogueTitle] = useState("");
  const [matchingNumbers, setMatchingNumbers] = useState([]);

  // Recalculate payoutDetails whenever selectedNumbers changes
  useEffect(() => {
    if (selectedNumbers.length > 2) {
      setPayoutDetails(getKenoMultiplierInfo(selectedNumbers.length));
    } else {
      setPayoutDetails("Please select 3 or more numbers.");
    }
  }, [selectedNumbers]);

  // Effect to update matchingNumbers when generatedNumbers or selectedNumbers change
  useEffect(() => {
    // Logic to determine matchingNumbers based on generatedNumbers and selectedNumbers
    const updatedMatchingNumbers = matchCounter(
      generatedNumbers,
      selectedNumbers
    );

    // Update the state with the calculated matchingNumbers
    setMatchingNumbers(updatedMatchingNumbers);

    const payoutAmount = calculatePayout(
      amount,
      matchingNumbers.length,
      payoutDetails
    );
    setPayout(payoutAmount);
  }, [generatedNumbers, selectedNumbers]);

  const handleSelectNumber = (number) => {
    const isSelected = selectedNumbers.includes(number);

    if (isSelected) {
      setSelectedNumbers((prevNumbers) =>
        prevNumbers.filter((n) => n !== number)
      );
    } else {
      if (selectedNumbers.length < 10) {
        setSelectedNumbers((prevNumbers) => [...prevNumbers, number]);
      } else {
        setDialogueTitle("ይቅርታ!");
        setModalContent("ከ 10 በላይ ቁጥሮችን መምረጥ አይችሉም።");
        setOpenModal(true);
      }
    }
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <Box sx={styles.container}>
      <Box sx={styles.topSection}>
        <TopSection balance={balance} setActiveComponent={setActiveComponent} />
      </Box>
      <Box>
        <NumbersG1
          onSelectNumber={handleSelectNumber}
          selectedNumbers={selectedNumbers}
          gameStarted={gameStarted}
        />
        <Box sx={styles.middleSection}>
          <RandomNumbers
            numbers={generatedNumbers}
            payout={payout}
            balance={balance}
            selectedNumbers={selectedNumbers}
            setGameStarted={setGameStarted}
            setBalance={setBalance}
          />
          <UserNumbers selectedNumbers={selectedNumbers} />
          <Payout payoutLoad={payoutDetails} amount={amount} />
        </Box>
        <NumbersG2
          onSelectNumber={handleSelectNumber}
          selectedNumbers={selectedNumbers}
          gameStarted={gameStarted}
        />
        <Controllers
          amount={amount}
          setAmount={setAmount}
          balance={balance}
          setBalance={setBalance}
          setGeneratedNumbers={setGeneratedNumbers}
          generatedNumbers={generatedNumbers}
          gameStarted={gameStarted}
          setGameStarted={setGameStarted}
          selectedNumbers={selectedNumbers}
          setSelectedNumbers={setSelectedNumbers}
          setDialogueTitle={setDialogueTitle}
          setModalContent={setModalContent}
          setOpenModal={setOpenModal}
          setMatchingNumbers={setMatchingNumbers}
        />
      </Box>

      {/* Modal */}
      <Dialog open={openModal} onClose={handleModalClose}>
        <DialogTitle>{dialogueTitle}</DialogTitle>
        <DialogContent>{modalContent}</DialogContent>
        <Button onClick={handleModalClose}>OK</Button>
      </Dialog>
    </Box>
  );
};

export default Board;
