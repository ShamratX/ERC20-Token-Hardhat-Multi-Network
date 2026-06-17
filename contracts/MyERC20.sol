// SPDX-License-Identifier: MIT
pragma solidity ^0.8.30;

/* import contract from Openzapllin 
*/

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";


/// @title My ERC20.
/// @notice Fixed supply, standard ERC20 token with no further minting after deployment.
/// @dev Uses OpenZeppelin ERC20 and Ownable.sol. all token are minting onces in constructor.

contract MyERC20 is ERC20, Ownable {

    /// @notice Initial and final total token supply (1,000,000,000 token with 18 decimals).
    /// @dev Immutable for transparency; matches the ERC20 total supply after construction.

    uint256 public immutable INITIAL_SUPPLY = 1_000_000_000 * 10 ** 18;

    /// @notice Deploys the token contract and mints the full fixed supply to the deployer.

    constructor() 
    ERC20("My ERC20", "MET") 
    Ownable(msg.sender) {
        _mint(msg.sender, INITIAL_SUPPLY);
    }


}