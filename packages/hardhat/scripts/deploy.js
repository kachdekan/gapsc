const { ethers } = require("hardhat");

async function main() {
  // Deploy the GamingTournament contract
  const GamingTournament = await ethers.getContractFactory("GamingTournament");
  const registrationFee = ethers.utils.parseEther("0.1"); // Set the desired registration fee
  const gamingTournament = await GamingTournament.deploy(registrationFee);

  await gamingTournament.deployed();

  console.log("GamingTournament deployed to:", gamingTournament.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
