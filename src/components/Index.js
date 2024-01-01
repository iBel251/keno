import React, { useState } from "react";
import Board from "./Board";
import HowTo from "./pages/HowTo";

const styles = {
  hidden: {
    display: "none",
  },
};

const Index = () => {
  const [matchedNumbers, setMatchedNumbers] = useState([]);
  const [userSelection, setUserSelection] = useState([]);
  const [randNumbers, setRandNumbers] = useState([]);
  const [betAmount, setBetAmount] = useState(0);
  const [payAmount, setPayAmount] = useState(0);
  const [activeComponent, setActiveComponent] = useState("board");
  return (
    <div>
      <div style={activeComponent === "board" ? {} : styles.hidden}>
        <Board setActiveComponent={setActiveComponent} />
      </div>
      <div style={activeComponent === "howto" ? {} : styles.hidden}>
        <HowTo setActiveComponent={setActiveComponent} />
      </div>
    </div>
  );
};

export default Index;
