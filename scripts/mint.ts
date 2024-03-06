import { ethers } from "hardhat";

const scdfContract = "0xa2F7a20E4B3Ab85601Dc94576d017e42c95dED97";

async function main() {
  const scdf = await ethers.getContractAt("SCDF", scdfContract);

  const mintTx = await scdf.safeMint(
    "0x4cDF9dd5d678E4274e5DBB902E91b80373899513"
  );

  console.log(`mintTx: ${scdf.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
