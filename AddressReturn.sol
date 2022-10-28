// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.14;

contract AR {
    address addr;
    
    function set(address _addr) public {
        addr = _addr;
    }
    
    function get() public view returns(address) {
        return addr;
    }
}
