const { ethers } = require('ethers');
const keccak256 = ethers.utils.keccak256;
const rlp = ethers.utils.RLP;
const { getAddress } = ethers.utils;

function calculateContractAddress(deployerAddress, nonce) {
  // Normalize the deployer address
  const normalizedAddress = getAddress(deployerAddress);

  // Convert nonce to hex and prepare RLP encoding
  const nonceHex = ethers.BigNumber.from(nonce).toHexString();
  const rlpEncoded = rlp.encode([normalizedAddress, nonceHex]);

  // Calculate the keccak256 hash of the RLP encoded input
  const hash = keccak256(rlpEncoded);

  // Take the last 20 bytes of the hash as the contract address
  const contractAddress = '0x' + hash.slice(-40);

  return contractAddress;
}

// Example usage
const deployerAddress = '0xYourDeployerAddress';
const nonce = 1;  // replace with the actual nonce
const contractAddress = calculateContractAddress(deployerAddress, nonce);
console.log('Contract Address:', contractAddress);
