// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

abstract contract SafeWhitelist {
    uint8 private immutable LIMIT;
    uint8 public counter;
    mapping(address => bool) whitelists;

    constructor(uint8 _limit) {
        LIMIT = _limit;
    }

    function addToWhitelist(address[] memory addresses)  public {
        if (addresses.length > 255) revert();
        uint8 len = uint8(addresses.length);

        if ((counter + len) > LIMIT) revert();
        uint8 _counter;

        for (uint8 i; i != len; ) {
            if (whitelists[addresses[i]]) continue;
            whitelists[addresses[i]] = true;
            ++_counter;
            unchecked { ++i; }
        }

        counter += _counter;
    }

    function removeFromWhitelist(address[] memory addresses)  public {
        if (addresses.length > 255) revert();
        uint8 len = uint8(addresses.length);

        if (len > counter) revert();
        uint8 _counter = counter;

        for (uint8 i; i != len; ) {
            if (!whitelists[addresses[i]]) continue;
            whitelists[addresses[i]] = false;
            --_counter;
            unchecked { ++i; }
        }

        counter = _counter;
    }

    function isWhitelisted(address _address) public view returns (bool) {
        return whitelists[_address];
    }
}
