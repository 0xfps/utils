// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.7;

/**
* @title AuthProxy.
* @author Anthony (fps) https://github.com/0xfps.
* @dev  A contract attachment that grants addresses special
*       access to call specified functions.
*/
abstract contract AuthProxy {
    address private admin;

    /// @dev    Mapping of addresses to contracts then to function.
    ///         Caller => Contract => Function Selector => True/False.
    mapping(address => mapping(address => mapping(bytes4 => bool))) private permissions;

    modifier onlyAdmin() {
        require(
            permissions[msg.sender][address(this)][msg.sig], 
            "Not Admin."
        );
        _;
    }

    constructor() {
        /// @dev Grant admin permission for grantPemission selector.
        /// @dev grantPemission => 0xe51edecd.
        permissions[msg.sender][address(this)][0xe51edecd] = true;
        /// @dev Grant admin pemission for revokePermission selector.
        /// @dev revokePermission => 0x4ec735ae.
        permissions[msg.sender][address(this)][0x4ec735ae] = true;
    }

    function canCall(
        address _caller,
        address _target,
        bytes4 _sig
    ) public view returns(bool)
    {
        return permissions[_caller][_target][_sig];
    }

    /// @dev Only admin and the addresses permitted can grant permissions.
    function grantPermission(
        address _caller,
        address _target,
        bytes4 _sig
    ) public onlyAdmin
    {
        require(_caller != address(0), "0x0 Address");
        permissions[_caller][_target][_sig] = true;
    }

    /// @dev Only Admin, can revoke permission.
    function revokePermission(
        address _caller,
        address _target,
        bytes4 _sig
    ) public onlyAdmin
    {
        require(msg.sender == admin, "Not Admin.");
        permissions[_caller][_target][_sig] = false;
    }
}
