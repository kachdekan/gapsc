// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

// Author: @janedoe
contract GamingTournament {
    address public organizer;
    uint256 public totalPrizePool;
    uint256 public registrationFee;

    enum TournamentStatus { Open, Closed }

    TournamentStatus public tournamentStatus;

    mapping(address => bool) public registeredParticipants; // Updated to track registered participants

    address public firstWinner;
    address public secondWinner;
    address public thirdWinner;

    event TournamentClosed(uint256 firstPrize, uint256 secondPrize, uint256 thirdPrize);

    modifier onlyOrganizer() {
        require(msg.sender == organizer, "Only the organizer can call this function");
        _;
    }

    modifier onlyOpenTournament() {
        require(tournamentStatus == TournamentStatus.Open, "Tournament is not open");
        _;
    }

    constructor(uint256 _registrationFee) {
        organizer = msg.sender;
        tournamentStatus = TournamentStatus.Open;
        totalPrizePool = 3 ether;
        registrationFee = _registrationFee;
    }

    function register() external onlyOpenTournament payable {
        if (registrationFee > 0) {
            require(msg.value == registrationFee, "Incorrect registration fee");
        }

        require(!registeredParticipants[msg.sender], "You are already registered");

        registeredParticipants[msg.sender] = true;
        totalPrizePool += msg.value;
    }

    function setWinners(
        address _firstWinner,
        address _secondWinner,
        address _thirdWinner
    ) external onlyOrganizer onlyOpenTournament {
        require(_firstWinner != address(0) && _secondWinner != address(0) && _thirdWinner != address(0), "Invalid winner addresses");

        firstWinner = _firstWinner;
        secondWinner = _secondWinner;
        thirdWinner = _thirdWinner;
    }

    function endTournament() external onlyOrganizer onlyOpenTournament {
        require(firstWinner != address(0) && secondWinner != address(0) && thirdWinner != address(0), "Winners not set");

        tournamentStatus = TournamentStatus.Closed;

        // Transfer prizes only to registered winners
        if (registeredParticipants[firstWinner]) {
            payable(firstWinner).transfer((totalPrizePool * 50) / 100);
        }
        if (registeredParticipants[secondWinner]) {
            payable(secondWinner).transfer((totalPrizePool * 30) / 100);
        }
        if (registeredParticipants[thirdWinner]) {
            payable(thirdWinner).transfer(totalPrizePool - ((totalPrizePool * 50) / 100) - ((totalPrizePool * 30) / 100));
        }

        emit TournamentClosed((totalPrizePool * 50) / 100, (totalPrizePool * 30) / 100, totalPrizePool - ((totalPrizePool * 50) / 100) - ((totalPrizePool * 30) / 100));
    }

    receive() external payable {
        // Accept ether sent to the contract
    }
}
