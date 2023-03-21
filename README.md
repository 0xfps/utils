# utils
A collection of:
- Random functions.
- Random Contract states.
- Language how-to's.
- More.

## A list of important websites & articles.

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

### Backend
- [Deploy Node API (Express Typescript) on Vercel](https://dev.to/tirthpatel/deploy-node-ts-express-typescript-on-vercel-284h)
- [Interacting With Smart Contracts Using Web3.js (Part I).](https://medium.com/0xcode/interacting-with-smart-contracts-using-web3-js-34545a8a1ebd)
- [Interacting With Smart Contracts Using Web3.js (Part II).](https://medium.com/0xcode/interacting-with-smart-contracts-using-web3-js-part-ii-c1ef7566d1c5)
- [tRPC Docs](https://trpc.io)
- [tRPC Mutations vs Queries](https://github.com/trpc/trpc/discussions/1638#discussioncomment-2341051)

### Resume
- [ATC Resume Scanner.](https://resumeworded.com/my-home.php)
- [Free Resume Review.](https://www.topresume.com/)
