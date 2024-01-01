import { Box } from "@mui/material";
import React from "react";

const styles = {
  topSection: {
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
  },
  btns: {
    padding: "3px",
    backgroundColor: "orange",
    borderRadius: "5px",
    margin: "2px 5px",
    color: "brown",
  },
  balance: {
    backgroundColor: "red",
    padding: "3px",
    color: "white",
    border: "1px solid orange",
  },
};

const TopSection = ({ balance, setActiveComponent }) => {
  const openHowto = () => {
    setActiveComponent("howto");
  };
  return (
    <Box sx={styles.topSection}>
      <Box sx={styles.balance}>ቀሪ : {balance} ብር</Box>
      <Box sx={styles.btns}>ገቢ/ወጪ</Box>
      <Box sx={styles.btns} onClick={openHowto}>
        አጨዋወት?
      </Box>
    </Box>
  );
};

export default TopSection;
