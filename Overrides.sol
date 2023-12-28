// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.19;

contract N {
    function getNum() public pure virtual returns (uint256) {
        return 8;
    }

    function showNum() public pure returns (uint256) {
        /// Returns 8.
        return getNum();
    }
}

contract C {
    function getNum() public pure virtual returns (uint256) {
        return 12;
    }

    function showNum2() public pure returns (uint256) {
        /// Returns 12.
        return getNum();
    }
}

contract P is N, C {
    function getNum() public pure virtual override(C, N) returns (uint256) {
        return 10;
    }

    function a() public pure returns(uint256) {
        /// Returns 10.
        return getNum();
    }

    function ab() public pure returns(uint256) {
        /// Returns 10.
        return showNum();
    }

    function cd() public pure returns(uint256) {
        /// Returns 10.
        return showNum2();
    }
}
