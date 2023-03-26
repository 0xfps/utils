// SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.19;

contract CalledContract {
    bytes32 public pub;
    string public str;

    function setNumber(string memory s) external {
        uint8 l = uint8(bytes(s).length);
        require(l < 32);
        bytes32 f = bytes32(bytes(s));
        assembly {
            mstore(0x00, f)
            mstore(0x20, l)
            let st := or(mload(0x00), mload(0x20))
            sstore(1, st)
            // t := sload(1)
        }
    }
}

contract CallerContract {
    address public called;
    bytes32 public constant firstPart = bytes32(bytes("This string is way over 32 chara"));
    bytes32 public constant secondPart = bytes32(bytes("cters I guess. I'm not kidding."));

    // Deploy with address of CalledContract.
    // constructor(address _address) {
    //     assembly {
    //         sstore(0, _address)
    //     }
    // }

    function callContract(uint256 x) public {
        address _called = called;

        assembly {
            let num := x
            mstore(0x00, 0x3fb5c1cb) // Start at 0x1c, this is the first calldata entry.
            mstore(0x20, x)

            let success := call(gas(), _called, 0, 0x1c, 0x24, 0, 0)
        }
    }

    function getLargeStringFromMemory() public view returns(string memory) {
        bytes32 firstPart = 0x5468697320737472696e6720697320776179206f766572203332206368617261;
        bytes32 secondPart = 0x637465727320492067756573732e2049276d206e6f74206b696464696e672e00;

        assembly {
            mstore(0x00, 0x20)
            mstore(0x20, 0x3f)
            mstore(0x40, firstPart)
            mstore(0x60, secondPart)

            return(0x00, 0x80)
        }
    }

    function returnFixedArrayFromMemory() public view returns (uint256[4] memory) {
        assembly {
            mstore(0x00, 1)
            mstore(0x20, 2)
            mstore(0x40, 3)
            mstore(0x60, 5)

            return(0x00, 0x80)
        }
    }

    function returnDynamicArrayFromMemory() public view returns (uint256[] memory, uint256) {
        assembly {
            mstore(0x00, 0x40)
            mstore(0x20, 0x05)
            mstore(0x40, 2)
            mstore(0x60, 3)
            mstore(0x80, 5)

            return(0x00, 0xa0)
        }
    }
}
// This strin g is way o ver 32 cha racters I  guess. I'm  not kiddi n
