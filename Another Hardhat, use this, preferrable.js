// Normal
// const app = require("express")();
// const port = 8080;

// With middleware.
const express = require("express");
const app = express();
const port = 8080;

app.use(express.json())

let odeleAddress;
let APIAddress;
let TokenAddress;

let deployedOdele;
let deployedToken;

let tokenOwner;


/******************************************
 * D  E P L O Y   T E S T   T O K E N .
 * *************************************/

const { ethers } = require("hardhat")

async function main1() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  tokenOwner = deployer.address

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("TestToken");
  const token = await Token.deploy();

  console.log("Token Owner: " + tokenOwner + "Token address:", token.address);
  TokenAddress = token.address
  deployedToken = token
}

main1()
  .then(() => 
  	// process.exit(0)
  	{})
  .catch((error) => {
    console.error(error);
    // process.exit(1);
});



/******************************************
 * D  E P L O Y   O D E L E   W A L L E T .
 * *************************************/



// Deploy the contract
async function main2() {
  // const [deployer] = await ethers.getSigners();
  // This will crash with require("ethers") so a new variable, ethersAddress was set so as to get a valid wallet address.
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  // console.log("Account balance:", (await deployer.getBalance()).toString());

  const odele = await ethers.getContractFactory("OdeleWallet");
  const _odele = await odele.deploy(deployer.address);

  console.log("Wallet address:", _odele.address);
  console.log("API address:", deployer.address);
  APIAddress = deployer.address
  odeleAddress = _odele.address
  deployedOdele = _odele
}

main2()
  .then(() => 
  	// process.exit(0)
  	{})
  .catch((error) => {
    console.error(error);
    // process.exit(1);
  });

// App variable.
// app.listen(port_variable, desired_function () => code)
app.listen(
	port,
	() => console.log(`It's alive on http://localhost:${port}`)
)

// `node .` to run index.js

// Endpoint 1.
// app_variable.endpoint(link, function (request_data, response))
app.get("/shirts", (req, res) => {
	res.status(200).send({
		address: odeleAddress,
	})
});


/**
 * Requires: 
 * - Token address
 * - Owner
 * - Receiver
 * - Amount
 * */
app.post("/withdraw", async (req, res) => {
	const address = req.body.tokenAddress;
	const owner = req.body.owner
	const receiver = req.body.receiver
	const amount = req.body.amount;

	// approval = await deployedToken.approve(odeleAddress, 1000)
	// if (approval.hash) {
	// 	console.log("\n", approval.hash, "\n")
	// }

	let b;

	try {
		b = await deployedOdele.addSupportForToken(TokenAddress)
	}
	catch (err) {
		b = false
	}

	if (b.hash) {
		console.log("\n", b.hash, "\n")
	}

	// let _theOdele = deployedOdele.provider.getSigner("0x5e078E6b545cF88aBD5BB58d27488eF8BE0D2593")
	// let _theOdele = deployedOdele.provider.getSigner(APIAddress)
	
	let trnsf;

	try {
		trnsf = await deployedOdele.withdrawTokensForPromotion(
			address, owner, receiver, amount
		);

		console.log(JSON.stringify(trnsf))
	}
	catch (err) {
		trnsf = false
	}

	if (trnsf != false) {
		res.status(200).send({
			message: `Transaction successful at ${trnsf.hash}`
		})
	}
	else {
		res.status(400).send({
		message: `Transaction Failed`
		})	
	}
})


app.get("/approve", async (req, res) => {
	let approval;

	try {
		approval = await deployedToken.approve(odeleAddress, 1000)
	}
	catch (err){
		approval = false
	}

	if (approval != false) {
		res.status(200).send({
			message: `Transaction successful at ${approval.hash},`
		})
	}
	else {
		res.status(400).send({
			message: `Transaction Failed`
		})
	}
})
