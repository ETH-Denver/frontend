import { Container, TextField } from "@mui/material";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AutoComplete } from "../baseComponents/AutoComplete";

const ProposalForm = () => {
  const [executionDate, setExecutionDate] = useState(new Date());
  const [location, setLocation] = useState("");
  const [content, setContent] = useState("");

  return (
    <Container>
      <AutoComplete />
      <form>
        <TextField
          inputProps={{ maxLength: 12 }}
          label="Location"
          onChange={(e) => setLocation(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="password"
          value={location}
          fullWidth
          sx={{ mb: 3 }}
        />
        <TextField
          inputProps={{ maxLength: 12 }}
          label="Content"
          onChange={(e) => setLocation(e.target.value)}
          required
          variant="outlined"
          color="secondary"
          type="content"
          value={content}
          fullWidth
          sx={{ mb: 3 }}
        />
        <DatePicker
          showIcon
          selected={executionDate}
          onChange={(date) => setExecutionDate(date)}
          icon="fa fa-calendar"
          label="Execution Date"
        />
      </form>
    </Container>
  );
};

export const CreateProposalPage = () => {
  return (
    <Container>
      <ProposalForm />
    </Container>
  );
};
