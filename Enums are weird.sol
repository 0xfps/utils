// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.14;

contract MMM {
    enum X {
        one,
        two
    }

    X public j = X.two;

    mapping(X => uint256) public funds;

    constructor() {
        funds[X.one] = 10000;
        funds[X.two] = 500;
    }

    function see(X x) public view returns(uint256) {
        return funds[x];
    }

    // Set function to pure, reading Enums is not reading a state variable.
    // function get() public view returns(uint256) {
    function get() public pure returns(uint256) {
        return uint256(X.two);
    }
}
