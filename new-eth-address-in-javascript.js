var ethers = require('ethers');  
var crypto = require('crypto');

var id = crypto.randomBytes(32).toString('hex');
var privateKey = "0x"+id;
console.log("SAVE BUT DO NOT SHARE THIS:", privateKey);

var wallet = new ethers.Wallet(privateKey);
console.log("Address: " + wallet.address);

// L I N K .
// https://www.quicknode.com/guides/web3-sdks/how-to-generate-a-new-ethereum-address-in-javascript
