// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.20;

import "@openzeppelin/contracts@5.0.2/token/ERC20/ERC20.sol";

contract OmegaERC20 is ERC20 {
    constructor() ERC20("OmegaERC20", "OE20") {
        _mint(msg.sender, 1000000000 * 10 ** decimals());
    }
}