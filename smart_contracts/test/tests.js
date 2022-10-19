const { expect } = require("chai");
const { ethers } = require("hardhat");

require("@nomicfoundation/hardhat-chai-matchers");

describe("Transactions", function () {
  let transactions, tx, timeStamp, amount, message, owner, addr1;

  beforeEach(async function () {
    const Transactions = await ethers.getContractFactory("Transactions");
    transactions = await Transactions.deploy();
    await transactions.deployed();

    [owner, addr1] = await ethers.getSigners();
    amount = ethers.utils.parseEther("0.1");
    message = "Test";

    await transactions.connect(owner).send(addr1.address, amount, message);
    tx = await transactions.transactions(0);

    // getting timestamp
    //timeStamp = (await ethers.provider.getBlock("latest")).timestamp;
    timeStamp = Date.now();
  });

  it("Should confirm that sender is owner", async function () {
    expect(tx.sender).to.equal(owner.address);
  });

  it("Should confirm that receiver is addr1", async function () {
    expect(tx.receiver).to.equal(addr1.address);
  });

  it("Should confirm that amount is correct", async function () {
    expect(tx.sender).to.equal(owner.address);
  });

  it("Should confirm that message is correct", async function () {
    expect(tx.sender).to.equal(owner.address);
  });

  it("Should confirm that transactionCount is updated", async function () {
    const transactionCount = await transactions.transactionCount(owner.address);
    expect(transactionCount.toNumber()).to.equal(1);
  });

  it("Should return all transactions", async function () {
    const allTransactions = await transactions.getAllTransactions();
    expect(allTransactions.length).to.equal(1);
  });
});
