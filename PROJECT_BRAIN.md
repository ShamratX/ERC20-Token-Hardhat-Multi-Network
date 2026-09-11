# PROJECT_BRAIN — ERC20-Token-Hardhat-Multi-Network

## Purpose

Baseline ERC-20 Hardhat template for multi-network deploy/test/verify without custom economics.

## Architecture

- `MyERC20.sol` — OZ ERC20 + Ownable, Solidity 0.8.30
- Single deploy script; no constructor args file
- Tests: deploy, transfer, approve/transferFrom, supply invariant

## Gotchas

- Rename token strings before real launches.
- package name `basic-erc20-token`; prefer `npx hardhat test` over npm test stub.
- Sepolia chainId in config has historically been easy to mistype — verify before deploy.
