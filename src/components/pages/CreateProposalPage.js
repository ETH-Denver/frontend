import { Container, TextField } from "@mui/material";

const ProposalForm = () => {
  return (
    <form>
      <TextField></TextField>
      <TextField></TextField>
      <TextField></TextField>
      <TextField></TextField>
      <TextField></TextField>
    </form>
  );
};

export const CreateProposalPage = () => {
  return (
    <Container>
      <ProposalForm />
    </Container>
  );
};
