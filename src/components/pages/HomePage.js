import { Container } from "@mui/material";
import { ProposalCard } from "../baseComponents/ProposalCard";

export const HomePage = () => {
  const mockArray = [1, 2, 3, 4, 5, 6];
  const proposals = mockArray.map((item) => (
    <ProposalCard
      fundedAmount={5000}
      fundingTarget={15000}
      provider={true}
      executionDate={"02/29/24"}
      expirationDate={"02/28/24"}
      location={"Denver, CO"}
    />
  ));
  return <Container sx={{ minWidth: "100%" }}>{proposals}</Container>;
};
