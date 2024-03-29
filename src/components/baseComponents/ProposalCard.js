import { Box, Card, Container, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const ProposalCard = ({
  fundedAmount,
  fundingTarget,
  provider,
  executionDate,
  expirationDate,
  location,
}) => {
  const fundingStatus =
    fundedAmount - fundingTarget > 0 ? "Funded" : "Incomplete";

  const providerStatus = provider ? "Filled" : "Unfilled";

  const navigate = useNavigate();

  return (
    <Card
      onClick={() => navigate("/show")}
      sx={{
        backgroundColor: "#FAF9F6",
        borderColor: "black",
        borderStyle: "solid",
        marginY: 1,
        filter: "drop-shadow(0px 4px 4px #4444dd)",
        borderRadius: 2,
      }}
    >
      <Typography variant="h5">
        Nunc gravida magna sit amet est dictum, a consectetur massa tristique.
      </Typography>
      <Box sx={{ display: "flex" }}>
        <Typography>Location:</Typography>
        <Typography>{location}</Typography>
      </Box>
      <Container
        sx={{
          display: "flex",
          textAlign: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Typography>Expiration Date:</Typography>
            <Typography>{expirationDate}</Typography>
          </Box>
          <Box>
            <Typography>Execution Date:</Typography>
            <Typography>{executionDate}</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography>Funded Amount:</Typography>
          <Typography>${fundedAmount}</Typography>
          <Typography>Funding Target:</Typography>
          <Typography>${fundingTarget}</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Typography>Funding Status:</Typography>
          <Typography>{fundingStatus}</Typography>
          <Typography>Provider Status:</Typography>
          <Typography>{providerStatus}</Typography>
        </Box>
      </Container>
    </Card>
  );
};
