const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // Deploying the contract
  const DeSearch = await hre.ethers.getContractFactory("DeSearch");
  const deSearch = await DeSearch.deploy();
  await deSearch.waitForDeployment();

  console.log("DeSearch deployed to:", deSearch.target);

  // Submitting a proposal
  await deSearch.submitProposal("Lead Researcher", "Project Title", "Project Details", 100);

  // Voting for the proposal
  await deSearch.voteForProposal(0);

  // Verifying the proposal (assuming you are the admin)
  await deSearch.verifyProposal(0);

  // Donating to the verified project
  await deSearch.donateToProject(0, { value: hre.ethers.parseEther("1") });

  // Getting the number of proposals
  const proposalsCount = await deSearch.getProposalsCount();
  console.log("Number of proposals:", proposalsCount);

  // Getting details of a proposal
  const proposalDetails = await deSearch.getProposalDetails(0);
  console.log("Proposal details:", proposalDetails);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
