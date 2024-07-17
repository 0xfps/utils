/**
 * Generates an address of a newly created contract
 * @param {Buffer} from the address which is creating this new address
 * @param {Buffer} nonce the nonce of the from account
 * @return {Buffer}
 */
exports.generateAddress = function (from, nonce) {
  from = exports.toBuffer(from)
  nonce = new BN(nonce)

  if (nonce.isZero()) {
    // in RLP we want to encode null in the case of zero nonce
    // read the RLP documentation for an answer if you dare
    nonce = null
  } else {
    nonce = Buffer.from(nonce.toArray())
  }

  // Only take the lower 160bits of the hash
  return exports.rlphash([from, nonce]).slice(-20)
}

// Basically, deploy all the contracts to the same chain with the same nonce and they'll all have the same address.
