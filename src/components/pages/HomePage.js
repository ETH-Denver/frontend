import { ProposalCard } from "../baseComponents/ProposalCard";

export const HomePage = () => {
  const mockArray = [1, 2, 3, 4, 5, 6];
  return (
    <div className="App">
      {mockArray.map((item) => (
        <ProposalCard />
      ))}
    </div>
  );
};
