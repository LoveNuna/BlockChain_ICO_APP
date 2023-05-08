const { ethers } = require("hardhat");

async function main() {
  //RRH
  console.log("Deploying RRH Contract...");
  const RRHFactory = await ethers.getContractFactory("RRH");
<<<<<<< HEAD
  const RRH = await STKNFactory.deploy();

  console.log("Deployed RRH:", stkn.address);
=======
  const RRH = await RRHFactory.deploy();

  console.log("Deployed RRH:", RRH.address);
>>>>>>> ec3d857 (change deploy.js)

  //RRHICO
  console.log("Deploying RRHICO Contract...");
  const RRHICOFactory = await ethers.getContractFactory("RRHICO");
<<<<<<< HEAD
  const RRHICO = await StknICOFactory.deploy(
=======
  const RRHICO = await RRHICOFactory.deploy(
>>>>>>> ec3d857 (change deploy.js)
    "0x00f2a05f8327ac26e1994b92dbd4e4813bfa8609",
    stkn.address
  );

<<<<<<< HEAD
  console.log("Deployed RRHICO:", stknICO.address);
=======
  console.log("Deployed RRHICO:", RRHICO.address);
>>>>>>> ec3d857 (change deploy.js)
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
