// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.13;

contract Y {
    uint[] public s = [4, 5, 6, 7];
    
    function f() public {
        // DANGLING REFERENCES.
        // Stores a pointer to the last array element of s.
        uint[] storage ptr = s;
        // Removes the last array element of s.
        s.pop();
        s.pop();
        // Writes to the array element that is no longer within the array.
        ptr.push(0x42); // 66.
        ptr.push(0x50); // 80.
        // Adding a new element to ``s`` now will not add an empty array, but
        // will result in an array of length 1 with ``0x42`` as element.
        s.push();
        s.push();

        // s => [4, 5, 66, 80];
    }
}
