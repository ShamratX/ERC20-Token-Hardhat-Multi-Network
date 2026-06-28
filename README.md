# ERC20 Standard  Token

A fully tested ERC20 token smart contract built with Hardhat, supporting multi-network deployment on Ethereum and BNB Chain. Includes standard ERC20 features, ownership control, and scripts for deployment, verification, and testing.


Features:
- Standard ERC20 (OpenZeppelin): transfer, approve, allowance, transferFrom, balanceOf
- Ownable: transferOwnership, renounceOwnership
- Fixed supply minted once in the constructor; no mint/burn/pause after deployment
- No custom `increaseAllowance` or `decreaseAllowance` helpers
- Multi-network deploy (Ethereum + BSC)




---

# Prerequisites

•⁠  ⁠*Node.js* LTS (v18 or v20 recommended)
•⁠  ⁠*npm* (comes with Node.js)

Check versions:

```bash
node -v
npm -v
```

---

# Project Structure

| Path                       | Purpose                                                                                                                                              |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| ⁠ contracts/MyERC20.sol ⁠ | ERC20 token contract (OpenZeppelin ERC20 + Ownable)                                                                                                  |
| ⁠ scripts/deploy.js ⁠        | Deployment script; deploys MyERC20 and prints a ready-to-run verify command                                                                           |
| ⁠ test/test.js ⁠  | Mocha/Chai tests: deployment, transfers, approve/transferFrom, edge cases                                                                               |
| ⁠ hardhat.config.js ⁠        | Hardhat config: networks (Hardhat, Sepolia, Mainnet, BSC Testnet, BSC Mainnet), Solidity 0.8.30, optimizer, Etherscan |
| ⁠ package.json ⁠             | Project metadata and dependency list                                                                                        |
| ⁠ package-lock.json ⁠        | Locked dependency versions for reproducible installs                                                                                                 |
| ⁠ .env.example ⁠             | Template for required environment variables                                                                                                            |
| ⁠ .env ⁠                     | Local env vars (private key, RPC URLs, API keys). Not committed; copy from ⁠ .env.example ⁠                                                  |
| ⁠ .gitignore ⁠               | Ignores ⁠ node_modules ⁠, ⁠ .env ⁠, ⁠ cache ⁠, ⁠ artifacts ⁠, coverage, etc.                                                                                 |

---

# Dependencies (from package.json)

All dependencies are declared in ⁠ package.json ⁠. ⁠ package-lock.json ⁠ pins exact versions so everyone gets the same dependency tree.

| Package                            | Type          | Purpose                                                    |
| ---------------------------------- | ------------- | ---------------------------------------------------------- |
| ⁠ @openzeppelin/contracts ⁠          | dependency    | ERC20 and Ownable implementations used by ⁠ MyERC20.sol ⁠ |
| ⁠ hardhat ⁠                          | devDependency | Build and test framework                                   |
| ⁠ @nomicfoundation/hardhat-toolbox ⁠ | devDependency | Ethers v6, Chai matchers, other Hardhat plugins            |
|                                    |               |                                                            |
| ⁠ dotenv ⁠                           | devDependency | Loads ⁠ .env ⁠ variables into ⁠ process.env ⁠                  |
| ⁠ hardhat-gas-reporter ⁠             | devDependency | Gas usage report during test execution                     |

You do not install these individually. A single install step installs everything.

---

# Install from Zero

### 1. Clone and enter the project

```bash
git clone <your-repo-url> MyERC20-Token
cd MyERC20-Token
```

---

### 2. Install all dependencies

```bash
npm install
```

This installs both dependencies and devDependencies from ⁠ package.json ⁠.

For reproducible installs (recommended for CI):

```bash
npm ci
```

---

# Environment Variables

Copy the example file and fill in your values:

```bash
cp .env.example .env
```

| Variable               | Required | Description                                             |
| ---------------------- | -------- | ------------------------------------------------------- |
| ⁠ PRIVATE_KEY ⁠          | Yes      | Deployer wallet private key (*include the 0x prefix*) |
| ⁠ ETH_SEPOLIA_RPC_URL ⁠  | Yes*     | Ethereum Sepolia RPC URL                                |
| ⁠ ETH_MAINNET_RPC_URL ⁠  | Optional | Ethereum Mainnet RPC URL                                |
| ⁠ BSC_TESTNET_RPC_URL ⁠  | Yes*     | BSC Testnet RPC URL                                     |
| ⁠ BSC_MAINNET_RPC_URL ⁠  | Optional | BSC Mainnet RPC URL                                     |
| ⁠ ETHERSCAN_API_KEY ⁠    | Optional | Etherscan API key for Ethereum contract verification    |
| ⁠ BSCSCAN_API_KEY ⁠      | Optional | BSCScan API key for BSC contract verification           |

\*Required only for the network you plan to deploy to.

See ⁠ .env.example ⁠ for placeholder values.

---

# Compile

```bash
npx hardhat compile
```

Artifacts will be generated in:


artifacts/
cache/


---

# Test

Run the full test suite:

```bash
npx hardhat test
```

Tests are located in:


test/test.js


They cover:

•⁠  ⁠deployment
•⁠  ⁠token transfers
•⁠  ⁠approve / transferFrom
•⁠  ⁠supply invariants

---

# Run Tests with Gas Report

`hardhat-gas-reporter` is already enabled in ⁠ hardhat.config.js ⁠. Run:

```bash
npx hardhat test
```

Gas usage is printed automatically after the test run.

---

# Deploy

Deploy to *Ethereum Sepolia*:

```bash
npx hardhat run scripts/deploy.js --network sepolia
```

Deploy to *Ethereum Mainnet*:

```bash
npx hardhat run scripts/deploy.js --network mainnet
```

Deploy to *BSC Testnet*:

```bash
npx hardhat run scripts/deploy.js --network bscTestnet
```

Deploy to *BSC Mainnet*:

```bash
npx hardhat run scripts/deploy.js --network bsc
```

---

### Deploy to Local Hardhat Node

Start a node:

```bash
npx hardhat node
```

Then deploy in another terminal:

```bash
npx hardhat run scripts/deploy.js --network localhost
```

The deploy script logs:

•⁠  ⁠Network name + ChainId
•⁠  ⁠Deployer wallet address and balance
•⁠  ⁠Contract address
•⁠  ⁠Deployment transaction hash
•⁠  ⁠Token total supply
•⁠  ⁠A ready-to-copy verify command, for example:

```bash
npx hardhat verify --network sepolia 0xYourDeployedContractAddress
```

---

# Verify Contract on BSCScan

Verification publishes your source code so BSCScan can validate the bytecode and expose the *Read / Write Contract* interface.

### Step 1 — Get API Key

Create an API key from:

https://bscscan.com/myapikey

---

### Step 2 — Add to ⁠ .env ⁠


BSCSCAN_API_KEY=YourApiKey


---

### Step 3 — Verify

After deployment, the deploy script prints a verify command you can copy. Or run manually:

BSC Testnet:

```bash
npx hardhat verify --network bscTestnet DEPLOYED_CONTRACT_ADDRESS
```

Example:

```bash
npx hardhat verify --network bscTestnet 0x1234567890abcde5nh5j45336mn65mn566m56b
```

BSC Mainnet:

```bash
npx hardhat verify --network bsc DEPLOYED_CONTRACT_ADDRESS
```

---

# Verify on Etherscan (Ethereum)

```bash
npx hardhat verify --network sepolia DEPLOYED_CONTRACT_ADDRESS
```

or

```bash
npx hardhat verify --network mainnet DEPLOYED_CONTRACT_ADDRESS
```

MyERC20 has *no constructor arguments*, so no extra parameters are needed.

---

# Security

•⁠  ⁠This contract uses *widely used and audited OpenZeppelin implementations*.

•⁠  ⁠The design is intentionally minimal:

  * fixed supply
  * no minting after deployment
  * no pause
  * no blacklist
  * no transaction fees
  * no custom allowance helpers (`increaseAllowance` / `decreaseAllowance`)

•⁠  ⁠This project *has not been formally audited* by a third-party security firm.

For production deployments consider:

•⁠  ⁠professional smart contract audit
•⁠  ⁠multisig ownership
•⁠  ⁠hardware wallet deployment

---

# License

•⁠  ⁠*Smart Contract (*⁠ contracts/MyERC20.sol ⁠*)*: MIT
•⁠  ⁠*Project Repository*: ISC (see ⁠ package.json ⁠)

---

# Disclaimer

This project is provided for *educational and reference purposes only*.

The authors and contributors:

•⁠  ⁠do not provide financial advice
•⁠  ⁠do not guarantee security or correctness
•⁠  ⁠are not responsible for losses resulting from the use of this code

Use this software and any deployed contracts *at your own risk*.