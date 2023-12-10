const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("GamingTournament", function () {
  let GamingTournament;
  let gamingTournament;
  let owner;
  let player1;
  let player2;

  const registrationFee = ethers.utils.parseEther("0.1");

  beforeEach(async function () {
    [owner, player1, player2] = await ethers.getSigners();

    GamingTournament = await ethers.getContractFactory("GamingTournament");
    gamingTournament = await GamingTournament.deploy(registrationFee);
    await gamingTournament.deployed();
  });

  it("should allow players to register for the tournament", async function () {
    await gamingTournament
      .connect(player1)
      .register({ value: registrationFee });
    const isPlayer1Registered = await gamingTournament.registeredParticipants(
      player1.address
    );
    expect(isPlayer1Registered).to.be.true;

    await gamingTournament
      .connect(player2)
      .register({ value: registrationFee });
    const isPlayer2Registered = await gamingTournament.registeredParticipants(
      player2.address
    );
    expect(isPlayer2Registered).to.be.true;
  });

  it("should set winners and close the tournament", async function () {
    await gamingTournament
      .connect(player1)
      .register({ value: registrationFee });
    await gamingTournament
      .connect(player2)
      .register({ value: registrationFee });

    const firstPrize = ethers.utils.parseEther("1.5");
    const secondPrize = ethers.utils.parseEther("0.9");
    const thirdPrize = ethers.utils.parseEther("0.6");

    await gamingTournament
      .connect(owner)
      .setWinners(player1.address, player2.address, owner.address);
    await gamingTournament.connect(owner).endTournament();

    const balancePlayer1 = await ethers.provider.getBalance(player1.address);
    const balancePlayer2 = await ethers.provider.getBalance(player2.address);
    const balanceOwner = await ethers.provider.getBalance(owner.address);

    expect(balancePlayer1).to.equal(registrationFee.add(firstPrize));
    expect(balancePlayer2).to.equal(registrationFee.add(secondPrize));
    expect(balanceOwner).to.equal(registrationFee.add(thirdPrize));
  });
});
