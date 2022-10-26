const { ethers } = require("hardhat")

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Token = await ethers.getContractFactory("TestToken");
  const token = await Token.deploy();

  console.log("Token address:", token.address);

  let signer2 = token.provider.getSigner("0x5e078E6b545cF88aBD5BB58d27488eF8BE0D2593")
  // let signer3 = JSONRPCPRovicer.getSigner("0x5e078E6b545cF88aBD5BB58d27488eF8BE0D2593")

  // console.log(signer3, "\n\n\n\n\n\n\n")

  let c = await token.transfer("0x364d6D0333432C3Ac016Ca832fb8594A8cE43Ca6", 100)
  
  // For getSigner, you use _address.
  let bal = await token.balanceOf(signer2._address)

  console.log(`${JSON.stringify(c)}`)
  console.log(`Balance is ${bal}\n\n\n\n`)

  let d;
  try {
    d = await token.transfer("0x364d6D0333432C3Ac016Ca832fb8594A8cE43Ca6", 90500)
    console.log(`${JSON.stringify(d)}`)
  } 
  catch
  {
    d = false
  }

  if (d != false) {
    console.log(`hash is ${d.hash}`)
  }
  else{
    console.log(d)
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});

