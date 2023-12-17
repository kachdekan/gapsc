import { Contract, providers } from "ethers";
import { parseEther } from "ethers/lib/utils";

const GAP_CONTRACT_ADDRESS = "0x6c6fB8a6eD54f73077c96a8E8B80F220D49fe860";

const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_registrationFee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "firstPrize",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "secondPrize",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "thirdPrize",
        type: "uint256",
      },
    ],
    name: "TournamentClosed",
    type: "event",
  },
  {
    inputs: [],
    name: "endTournament",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "firstWinner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "organizer",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "register",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "registeredParticipants",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "registrationFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "secondWinner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_firstWinner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_secondWinner",
        type: "address",
      },
      {
        internalType: "address",
        name: "_thirdWinner",
        type: "address",
      },
    ],
    name: "setWinners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "thirdWinner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalPrizePool",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "tournamentStatus",
    outputs: [
      {
        internalType: "enum GamingTournament.TournamentStatus",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

interface Props {
  address?: string;
  userAddress: string;
}

export const transferCUSD = async ({
  address = GAP_CONTRACT_ADDRESS,
  userAddress,
}: Props) => {
  if (window.ethereum) {

    
    // Get Connected accounts, if not connected request connection.
    const provider = new providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner(userAddress);

    // Retrieve the contract interface from the deployed contract address
    const CUSDContract = new Contract(GAP_CONTRACT_ADDRESS, abi, signer);
    let txn = await signer.sendTransaction({
      to: address,
      value: parseEther("0.1"),
    });
    let receipt = await txn.wait();
  }
};

declare global {
  interface Window {
    ethereum: any;
  }
}
