// REMOVE THIS WHEN IT'S TIME FOR NITPICKING.

app.get("/s", async (req, res) => {
    const data = await multichainWallet.smartContractCall({
        rpcUrl: GOERLI_RPC_URL,
        network: 'ethereum',
        contractAddress: '0x6D985a17d5bf2d2bd25aB6208885d87d2dbEe952',
        method: 'store',
        methodType: 'write',
        params: ['8'],
        contractAbi: [{"inputs":[],"name":"get","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"maps","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"x","type":"uint8"}],"name":"store","outputs":[],"stateMutability":"nonpayable","type":"function"}],
        privateKey: '0x9df2d88554409ee5510c0e4c5869f3409defae8a98251364769640ee6d2daf24'
      });

    console.log(data)
})

// Test Data.
// data.hash on success.
//   5648073876685
//   Wallet: 0xc611B4faaa9f7a7A49189Cadb3CEd5DcAC48c304
//   Private Key: 0x9df2d88554409ee5510c0e4c5869f3409defae8a98251364769640ee6d2daf24
//   Contract Address: 0x6D985a17d5bf2d2bd25aB6208885d87d2dbEe952
