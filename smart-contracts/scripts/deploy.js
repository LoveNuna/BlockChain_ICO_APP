const { ethers } = require("hardhat");

async function main() {
  //RRH
  console.log("Deploying RRH Contract...");
  const RRHFactory = await ethers.getContractFactory("RRH");
  const RRH = await STKNFactory.deploy();

  console.log("Deployed RRH:", stkn.address);

  //RRHICO
  console.log("Deploying RRHICO Contract...");
  const RRHICOFactory = await ethers.getContractFactory("RRHICO");
  const RRHICO = await StknICOFactory.deploy(
    "0x00f2a05f8327ac26e1994b92dbd4e4813bfa8609",
    stkn.address
  );

  console.log("Deployed RRHICO:", stknICO.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
