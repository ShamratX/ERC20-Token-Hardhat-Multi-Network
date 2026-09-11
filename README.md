# ERC-20 Token (Hardhat Multi-Network)

Minimal fixed-supply ERC-20 with Ownable, deployable to **Ethereum** and **BNB Smart Chain** via Hardhat.

## Features

- OpenZeppelin ERC-20 + Ownable
- Fixed supply minted once to deployer (`1_000_000_000` × 10^18)
- No post-deploy mint / burn / pause / tax helpers
- Multi-network Hardhat config + tests for transfer / approve flows

## Requirements

- Node.js 18+
- npm

## Quick start

```bash
git clone https://github.com/ShamratX/ERC20-Token-Hardhat-Multi-Network.git
cd ERC20-Token-Hardhat-Multi-Network
npm install
cp .env.example .env
npx hardhat compile
npx hardhat test
npx hardhat run scripts/deploy.js --network bscTestnet
```

Networks: `hardhat`, `sepolia`, `eth`, `bscTestnet`, `bsc`.

## Config (env names)

`PRIVATE_KEY`, `ETH_SEPOLIA_RPC_URL`, `ETH_MAINNET_RPC_URL`, `BSC_TESTNET_RPC_URL`, `BSC_MAINNET_RPC_URL`, `ETHERSCAN_API_KEY`, `BSCSCAN_API_KEY`

## Project structure

```text
contracts/MyERC20.sol
scripts/deploy.js
test/test.js
hardhat.config.js
```

Token metadata in contract: name `"My ERC20"`, symbol `"MET"` (change in Solidity before production deploy).

## Limitations

- Intentionally minimal — no tax, modes, or reserve split.
- Confirm Sepolia `chainId` in `hardhat.config.js` matches the network you intend.
- Use network name `eth` for Ethereum mainnet in this config.
- BSC verification may require BscScan API key wiring in Hardhat.

## License

See repository / package metadata.
