# utils
A collection of:
- Random functions.
- Random Contract states.
- Language how-to's.
- More.

## A list of important websites & articles.
### Tools
[Keccak256 Online.](https://emn178.github.io/online-tools/keccak_256.html)<br>
[String to Bytes Converter.](https://www.devoven.com/string-to-bytes32)

### Solidity
- [Understanding Ethereum Smart Contract Storage.](https://programtheblockchain.com/posts/2018/03/09/understanding-ethereum-smart-contract-storage/)
```solidity
/// DYNAMIC ARRAY STORAGE IN STORAGE LOCATION.
function arrLocation(uint256 slot, uint256 index)
    public
    pure
    returns (uint256)
{
    return uint256(keccak256(slot)) + (index);
}
```

```solidity
/// EIP-2 still allows signature malleability for ecrecover(). Remove this possibility and make the signature
/// unique. Appendix F in the Ethereum Yellow paper (https://ethereum.github.io/yellowpaper/paper.pdf), defines
/// the valid range for s in (281): 0 < s < secp256k1n ÷ 2 + 1, and for v in (282): v ∈ {27, 28}. Most
/// signatures from current libraries generate a unique signature with an s-value in the lower half order.
///
/// If your library generates malleable signatures, such as s-values in the upper range, calculate a new s-value
/// with 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141 - s1 and flip v from 27 to 28 or
/// vice versa. If your library also generates signatures with 0/1 for v instead 27/28, add 27 to v to accept
/// these malleable signatures as well.

if (
    uint256(s) >
    0x7FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF5D576E7357A4501DDFE92F46681B20A0
) {
    revert("ECRecover: invalid signature 's' value");

if (v != 27 && v != 28) {
    revert("ECRecover: invalid signature 'v' value");
}
```
- [Stack Machines: Fundamentals. [_Aug 28th, 2013_]](https://igor.io/2013/08/28/stack-machines-fundamentals.html)
- [An Ethereum Virtual Machine Opcodes Interactive Reference.](https://www.evm.codes)
- [Solidity Tutorial: All About Memory.](https://betterprogramming.pub/solidity-tutorial-all-about-memory-1e1696d71ee4)

### Assembly
- [A Practical Introduction To Solidity Assembly: Part 0.](https://mirror.xyz/0xB38709B8198d147cc9Ff9C133838a044d78B064B/nk40v2MJKSHXXNSlbqqhpwJf4MtZ9V2Vp8P_bSNwjYc)
- [A Practical Introduction To Solidity Assembly: Part 1.](https://mirror.xyz/0xB38709B8198d147cc9Ff9C133838a044d78B064B/PpA5KdQhrE_2Bf-USfKePROJ5tE-raL7_VGBR8HE39E)
- [A Practical Introduction To Solidity Assembly: Part 2.](https://mirror.xyz/0xB38709B8198d147cc9Ff9C133838a044d78B064B/Hh69VJWM5eiFYFINxYWrIYWcRRtPm8tw3VFjpdpx6T8)
- [Solidity Tutorial : all about Assembly.](https://jeancvllr.medium.com/solidity-tutorial-all-about-assembly-5acdfefde05c)
- [Advanced Solidity: Yul and Assembly.](https://www.udemy.com/course/advanced-solidity-yul-and-assembly/)
- [A list of all EVM Opcodes from Solidity Yul Docs.](https://docs.soliditylang.org/en/v0.6.2/yul.html#evm-dialect)

### Integration
- [Connect Metamask with Ethers.js](https://medium.com/@kaishinaw/connect-metamask-with-ethers-js-fc9c7163fd4d)
- [Switch Ethereum Chain](https://stackoverflow.com/questions/68252365/how-to-trigger-change-blockchain-network-request-on-metamask#:~:text=I%20was%20finally%20able%20to%20find%20the%20answer%3A,%2F%2F%20chainId%20must%20be%20in%20hexadecimal%20numbers%20%7D%29%3B)

### Backend
- [Deploy Node API (Express Typescript) on Vercel](https://dev.to/tirthpatel/deploy-node-ts-express-typescript-on-vercel-284h)
- [Interacting With Smart Contracts Using Web3.js (Part I).](https://medium.com/0xcode/interacting-with-smart-contracts-using-web3-js-34545a8a1ebd)
- [Interacting With Smart Contracts Using Web3.js (Part II).](https://medium.com/0xcode/interacting-with-smart-contracts-using-web3-js-part-ii-c1ef7566d1c5)
- [tRPC Docs](https://trpc.io)
- [tRPC Mutations vs Queries](https://github.com/trpc/trpc/discussions/1638#discussioncomment-2341051)

### Resume
- [ATC Resume Scanner.](https://resumeworded.com/my-home.php)
- [Free Resume Review.](https://www.topresume.com/)
