import { Box } from "@mui/material";
import React from "react";

const styles = {
  container: {
    width: "17%",
    height: "180px",
    border: "2px solid orange",
    background: "black",
    color: "white",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  selectedNumber: {
    background: "blue",
    margin: "2px",
    width: "20px",
    borderRadius: "50%",
    padding: "3px",
  },
};

const UserNumbers = ({ selectedNumbers }) => {
  return (
    <Box sx={styles.container}>
      <Box>Selected</Box>
      {selectedNumbers.map((number) => (
        <Box key={number} sx={styles.selectedNumber}>
          {number}
        </Box>
      ))}
    </Box>
  );
};

export default UserNumbers;
