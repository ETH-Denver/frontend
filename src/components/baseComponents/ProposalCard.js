import { Card, Typography } from "@mui/material";
import React from "react";

export const ProposalCard = () => {
  return (
    <Card
      sx={{
        backgroundColor: "#FAF9F6",
        borderColor: "black",
        borderStyle: "solid",
        marginY: 1,
        marginX: 2,
        filter: "drop-shadow(0px 4px 4px #4444dd)",
        borderRadius: 2,
      }}
    >
      <Typography variant="h5">Proposal Card</Typography>
      <Typography>Expiration Date:</Typography>
      <Typography>02/28/2024</Typography>
      <Typography>Execution Date:</Typography>
      <Typography>02/29/2024</Typography>
      <Typography>Funded Amount:</Typography>
      <Typography>$5,000</Typography>
      <Typography>Funding Target:</Typography>
      <Typography>$15,000</Typography>
      <Typography>Funding Status:</Typography>
      <Typography>Funding Open</Typography>
      <Typography>Provider Status:</Typography>
      <Typography>Filled</Typography>
    </Card>
  );
};
