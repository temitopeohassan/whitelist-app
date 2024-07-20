const hre = require("hardhat");

async function main() {
  /*
  DeployContract in ethers.js is an abstraction used to deploy new smart contracts,
  so whitelistContract here is a factory for instances of our Whitelist contract.
  */
  // Deploy the Whitelist contract with a maximum of 10 whitelisted addresses
  const whitelistContract = await hre.ethers.deployContract("Whitelist", [10]);

  // Wait for the contract to be deployed
  await whitelistContract.waitForDeployment();

  // Log the address of the deployed contract
  console.log("Whitelist Contract Address:", whitelistContract.target);
}

// Call the main function and handle any errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
