import React, { useEffect } from "react";
import { Box, Button, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const HowTo = ({ setActiveComponent }) => {
  const handleClose = () => {
    setActiveComponent("board");
  };
  useEffect(() => {
    // Add event listener for back button press
    const handleBackButton = () => {
      handleClose();
    };
    window.addEventListener("hashchange", handleBackButton);

    // Cleanup function to remove listener
    return () => {
      window.removeEventListener("hashchange", handleBackButton);
    };
  }, [handleClose]);
  return (
    <Box>
      <Box display="flex" justifyContent="flex-end">
        {/* Close button */}
        <IconButton onClick={handleClose} size="small">
          <CloseIcon />
        </IconButton>
      </Box>
      <Box>
        {/* Instructions on how to play */}
        <Typography variant="h5" mb={2}>
          How to Play
        </Typography>
        <Typography paragraph>
          Welcome to the simple 1-ticket keno game! Follow these steps to play:
        </Typography>
        <Typography component="div">
          <ol>
            <li>Choose a number of tickets (1).</li>
            <li>Select 3 to 10 numbers for each ticket.</li>
            {/* Add more instructions as needed */}
          </ol>
        </Typography>
      </Box>
    </Box>
  );
};

export default HowTo;
