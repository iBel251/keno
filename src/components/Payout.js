import React, { useEffect } from "react";
import { Box } from "@mui/material";

const styles = {
  container: {
    width: "35%",
    height: "180px",
    border: "1px solid black",
    background: "gray",
  },
  table: {
    width: "100%",
    maxHeight: "100%", // Set maxHeight to limit the height of the table
  },
  cell: {
    padding: "1px", // Adjust padding to decrease cell height
    fontSize: "14px",
  },
};

const Payout = ({ payoutLoad, amount }) => {
  useEffect(() => {
    // This effect will run after the component has re-rendered
    console.log("payout load in payout is:", payoutLoad);
  }, [payoutLoad]); // Only run the effect when payoutLoad changes

  return (
    <Box style={styles.container}>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.cell}>Match</th>
            <th style={styles.cell}>Payout</th>
          </tr>
        </thead>
        <tbody>
          {typeof payoutLoad === "object" && payoutLoad !== null ? (
            Object.entries(payoutLoad).map(([key, value]) => (
              <tr key={key}>
                <td style={styles.cell}>{key}</td>
                <td style={styles.cell}>{value * amount} Birr</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" style={styles.cell}>
                {payoutLoad}
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </Box>
  );
};

export default Payout;
