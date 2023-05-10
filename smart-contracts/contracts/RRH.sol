// SPDX-License-Identifier: MIT
pragma solidity >= 0.8.16;

import "../node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract RRH is ERC20 {
    constructor() ERC20("RiRiHam Token", "RRH") {
        _mint(msg.sender, 5000 * 1e18);
    }
}
