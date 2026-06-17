const hre = require("hardhat");
const { ethers, network } = hre;

const main = async() => {
    try {
        const [deployer] = await ethers.getSigners();

        const { chainId } = await deployer.provider.getNetwork();

        console.log(`Network: ${network.name} (ChainId ${chainId})`);
        console.log(`Deployer: ${deployer.address}`);

        const getBalance = await deployer.provider.getBalance(deployer.address);
        const balanceFormatted = ethers.formatEther(getBalance);
        console.log(`Deployer Balance ${balanceFormatted} ETH`);

        const MyERC20 = await ethers.getContractFactory("MyERC20", deployer);
        const token = await MyERC20.deploy();

        await token.waitForDeployment();

        const contractAddress = await token.getAddress();
        const DeploymentTx = token.deploymentTransaction();
        const txHash = DeploymentTx ? DeploymentTx.hash: "N/A";

        const totalSupply = await token.totalSupply();
        const totalSupplyFormated = ethers.formatUnits(totalSupply, 18);

        console.log(`Contract Address: ${contractAddress}`);
        console.log(`Deployment tx Hash: ${txHash}`);   
        console.log(`Total Supply: ${totalSupplyFormated}`);
        

    } catch(error) {
        console.error("Deployment failed:", error);
        process.exitCode = 1;
        
    }
}
main();