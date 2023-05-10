const { ethers } = require("hardhat");

async function main() {
  //RRH
  console.log("Deploying RRH Contract...");
  const RRHFactory = await ethers.getContractFactory("RRH");
  const RRH = await RRHFactory.deploy();
  console.log("Deployed RRH:", RRH.address);


  //RRHICO
  console.log("Deploying RRHICO Contract...");
  const RRHICOFactory = await ethers.getContractFactory("RRHICO");
  const RRHICO = await RRHICOFactory.deploy(
    "0x2Fc88B2065012314Cb91606D00115eD82f6f6CF9",
    RRH.address
  );
  console.log("Deployed RRHICO:", RRHICO.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
