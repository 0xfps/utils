const express = require("express")

// For new address development
var ethersAddress = require('ethers')
var crypto = require('crypto')

const app = express()
app.use(express.json())

const port = 8080


const id = crypto.randomBytes(32).toString('hex')
const privateKey = "0x"+id
console.log(`SAVE BUT DO NOT SHARE THIS: ${privateKey} \n`)

const wallet = new ethersAddress.Wallet(privateKey)
console.log(`API Address @ ${wallet.address} \n`)

// Deploy the contract
async function main() {
  // const [deployer] = await ethers.getSigners();
  // This will crash with require("ethers") so a new variable, ethersAddress was set so as to get a valid wallet address.
  const deployer = wallet.address;

  console.log("Deploying contracts with the account:", deployer);

  // console.log("Account balance:", (await deployer.getBalance()).toString());

  const c = await ethers.getContractFactory("C");
  const _c = await c.deploy(wallet.address);

  console.log("Token address:", _c.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

// Deploy the Test Token contract and approve.

app.listen(port, () => {
  console.log(`Express is live @ ${port}`)
})

/**
 * Requires request body to contain:
 * - */
// app.post("/withdraw", (req, res) => {

// })
