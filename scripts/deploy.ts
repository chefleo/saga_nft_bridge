import { ethers } from "hardhat";

async function main() {
  const scdf = await ethers.deployContract("SCDF");

  await scdf.waitForDeployment();

  console.log(`Saga Cat Dog Food deployed to ${scdf.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
