module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 5000000
    }
  },
  compilers: {
    solc: {
		version: "0.8.14",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
		remappings: [
			// "@openzeppelin=./node_modules/@openzeppelin"
		],
      }
    }
  }
};

// V I T A L   L I N K S .
// https://github.com/juanfranblanco/vscode-solidity/issues/320
// https://stackoverflow.com/questions/67321111/file-import-callback-not-supported/72168392#72168392
// https://github.com/trufflesuite/truffle/issues/2768
// https://github.com/omgnetwork/plasma-contracts/issues/190
// https://github.com/trufflesuite/truffle/issues/2355
// https://github.com/eth-brownie/brownie/issues/893
