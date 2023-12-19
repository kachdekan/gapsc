import { ethers, Contract, BrowserProvider, parseEther } from "ethers";

const GAP_CONTRACT_ADDRESS = "0x6c6fB8a6eD54f73077c96a8E8B80F220D49fe860";

// const abi = [
//   {
//     inputs: [
//       {
//         internalType: "uint256",
//         name: "_registrationFee",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "nonpayable",
//     type: "constructor",
//   },
//   {
//     anonymous: false,
//     inputs: [
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "firstPrize",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "secondPrize",
//         type: "uint256",
//       },
//       {
//         indexed: false,
//         internalType: "uint256",
//         name: "thirdPrize",
//         type: "uint256",
//       },
//     ],
//     name: "TournamentClosed",
//     type: "event",
//   },
//   {
//     inputs: [],
//     name: "endTournament",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "firstWinner",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "organizer",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "register",
//     outputs: [],
//     stateMutability: "payable",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     name: "registeredParticipants",
//     outputs: [
//       {
//         internalType: "bool",
//         name: "",
//         type: "bool",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "registrationFee",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "secondWinner",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [
//       {
//         internalType: "address",
//         name: "_firstWinner",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "_secondWinner",
//         type: "address",
//       },
//       {
//         internalType: "address",
//         name: "_thirdWinner",
//         type: "address",
//       },
//     ],
//     name: "setWinners",
//     outputs: [],
//     stateMutability: "nonpayable",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "thirdWinner",
//     outputs: [
//       {
//         internalType: "address",
//         name: "",
//         type: "address",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "totalPrizePool",
//     outputs: [
//       {
//         internalType: "uint256",
//         name: "",
//         type: "uint256",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     inputs: [],
//     name: "tournamentStatus",
//     outputs: [
//       {
//         internalType: "enum GamingTournament.TournamentStatus",
//         name: "",
//         type: "uint8",
//       },
//     ],
//     stateMutability: "view",
//     type: "function",
//   },
//   {
//     stateMutability: "payable",
//     type: "receive",
//   },
// ];

interface Props {
  userAddress: string;
}

const ADDRESS = "0x48fCA0f8Fc7522Fb526C8a2a39EEb94D73f30f36";

// export const transferCUSD = async ({
//   userAddress,
// }: Props) => {
//   if (
//     typeof window !== undefined
//       ? window.ethereum && window.ethereum.isMiniPay
//       : undefined
//   ) {
//     // Get Connected accounts, if not connected request connection.
//     const provider = new BrowserProvider(
//       typeof window !== undefined ? window.ethereum : undefined
//     );
//     const signer = await provider
//       .getSigner(userAddress)
//       .then((response) => {
//         return response;
//       })
//       .catch((error) => {
//         console.log("signer", error);
//         return error;
//       });

//     // Retrieve the contract interface from the deployed contract address
//     const CUSDContract = new Contract(GAP_CONTRACT_ADDRESS, abi, signer);
//     let txn = await CUSDContract.register({
//       value: parseEther("0.1"),
//     });
//     let receipt = await txn.wait();
//   }
// };

export const transferCUSD = async ({ userAddress }: Props) => {
  const recipientAddress = ADDRESS;
  const amount = parseEther("0.1");

  // Get Connected accounts, if not connected request connection.
  const provider = new BrowserProvider(window.ethereum);

  // Get the signer from the provider
  try {
    const signer = await provider.getSigner(userAddress);
    // Request user permission to interact with their wallet (MetaMask)
    // await window.ethereum.enable();

    // Create a transaction object
    const transaction = {
      to: recipientAddress,
      value: amount,
    };

    // Sign and send the transaction
    const transactionResponse = await signer.sendTransaction(transaction);

    // Wait for the transaction to be mined
    const receipt = await transactionResponse.wait();

    console.log("Transaction hash:", receipt.transactionHash);
    console.log("Transaction confirmed in block:", receipt.blockNumber);

    alert(`Successfully sent cUSD to ${recipientAddress}`);
  } catch (error: any) {
    console.error("Error sending Ether:", error?.message);
    alert("Error sending Ether. Please check the console for details.");
  }
};

declare global {
  interface Window {
    ethereum: any;
  }
}
