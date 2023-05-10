const { expect } = require("chai");
const { ethers } = require("hardhat");
//ICO sales test
describe("RRH", function () {
    let owner;
    let addr1;
    let rrhico;

    beforeEach(async () => {
        [owner, addr1] = await ethers.getSigners();

        const RRH = await ethers.getContractFactory('RRH');
        const rrh = await RRH.connect(owner).deploy();
        await rrh.deployed();

        const RRHICO = await ethers.getContractFactory('RRHICO');
        rrhico = await RRHICO.connect(owner).deploy(
            "0x00f2a05f8327ac26e1994b92dbd4e4813bfa8609",
            rrh.address
            );
        await rrhico.deployed();
    });

    describe("Invest", function(){
        
        it("Check state now", async function () {
            expect(await rrhico.getICOState()).to.eq("Not Started")
        });
    
        it("Check state before invest", async function () {

            expect(rrhico.connect(addr1).invest({value: ethers.utils.parseEther('0.05')}))
                .to.be.revertedWith("ICO isn't running");
        });
    
        it("Check amount in Min amount limits", async function () {
            
            await rrhico.connect(owner).startICO();
            expect( rrhico.connect(addr1).invest({value: ethers.utils.parseEther('0.005')}))
                .to.be.revertedWith("Check Min and Max Investment");
        });

        it("Check amount in Max amount limits", async function () {
            
            rrhico.connect(owner).startICO();
            expect( rrhico.connect(addr1).invest({value: ethers.utils.parseEther('0.501')}))
                .to.be.revertedWith("Check Min and Max Investment");
        });

        it("Check blocktime is runing time", async function () {
            await rrhico.connect(owner).startICO();
            const amount = 1683679890000 - Math.floor(Date.now()) + 1000;
            await ethers.provider.send('evm_increaseTime', [amount]);
            await expect( rrhico.connect(addr1).invest({value: ethers.utils.parseEther('0.05')}))
                .to.be.revertedWith("ICO already Reached Maximum time limit");
        });

        it("check deposit result", async function () {
            await rrhico.connect(owner).startICO();
            const amount = 1683622290000 - Math.floor(Date.now()) + 1000;
            await ethers.provider.send('evm_increaseTime', [amount]);
            expect(rrhico.connect(addr1).invest({value: ethers.utils.parseEther('0.05')}))
                .emit.equal(true);
        });


    });   
    describe("Withdraw", function(){
        it("should not allow users to deposit after check state", async function () {
           
            expect(rrhico.connect(addr1).invest({value: ethers.utils.parseEther('0.05')}))
                .to.be.revertedWith("ICO isn't end");
        });
    
        it("check require", async function () {
            await rrhico.connect(owner).startICO();
            const amount = 1683622290000 - Math.floor(Date.now()) + 1000;
            await ethers.provider.send('evm_increaseTime', [amount]);
            expect(rrhico.connect(addr1).withdraw())
                .to.be.revertedWith("ICO isn't end");
        });

        it("Check withdraw", async function () {
            await rrhico.connect(owner).startICO();
            await rrhico.connect(addr1).invest({value: ethers.utils.parseEther('0.05')});
            await rrhico.connect(addr1).invest({value: ethers.utils.parseEther('0.05')});
            await rrhico.connect(addr1).invest({value: ethers.utils.parseEther('0.05')});
            await rrhico.connect(addr1).invest({value: ethers.utils.parseEther('0.05')});
            const amount = 1683679890000 - Math.floor(Date.now()) + 1000;
            await ethers.provider.send('evm_increaseTime', [amount]);
            await rrhico.connect(owner).endIco();
            expect(rrhico.connect(addr1).withdraw())
                .to.eq(true);
        });
    });
  });
  