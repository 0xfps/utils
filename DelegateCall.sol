// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

// Interface for Logic to implement.
// Useful for parsing selector in abi.encodeWithSelector.
interface IStorage {
    function increment() external;
}

// Storage, best if abstract.
abstract contract Storage {
    uint256 public number;
    address public logic;
    address public sender;
    address public owner;
}

// Proxy Contract
// Constructor initializes and sets important variables.
contract Proxy is Storage {
    constructor (address _logic) {
        assembly {
            sstore(logic.slot, _logic)
            mstore(0x00, 0xc4d66de8) // bytes4(keccak256(initialize(address)));
            mstore(0x20, caller())

            pop(delegatecall(gas(), sload(logic.slot), 0x1c, 0x24, 0x00, 0x00))
        }
    }

    receive() external payable { }

    // Delegate call.
    fallback() external payable {
        assembly {
            let _logic := sload(logic.slot)
            calldatacopy(0xa0, 0x00, calldatasize())
            let success := delegatecall(gas(), _logic, 0xa0, calldatasize(), 0x00, 0x00)
            if iszero(success) {
                revert(0x00, 0x00)
            }
        }
    }
}

// Logic Contract.
// Do NOT put any state variable here, ever.
// Make it inline with the declared interface.
// Add a separate contract for upgrading logic address,
// for aesthetics, like Proxiable (https://eips.ethereum.org/EIPS/eip-1822).
contract Logic2 is IStorage, Storage {
    function initialize(address add) public {
        owner = add;
    }

    function increment() public {
        if (msg.sender != owner) revert();
        number += 1;
    }

    function update(address newLogic) public {
        if (msg.sender != owner) revert();
        assembly {
            sstore(logic.slot, newLogic)
        }
    }
}
