// SPDX-License-Identifier: MIT

import "../node_modules/@openzeppelin/contracts/utils/math/SafeMath.sol";

pragma solidity ^0.8.17;

contract Transactions {
    using SafeMath for uint256;
    
    mapping(address => uint) public transactionCount;

    event Transfer(address from, address receiver, uint256 amount, string message, uint256 timeStamp);

    struct TransferStruct {
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timeStamp;
    }

    TransferStruct[] public transactions;

    function send(address payable _receiver, uint256 _amount, string memory _message) public payable {
        ++transactionCount[msg.sender];
        transactions.push(TransferStruct(msg.sender, _receiver, _amount, _message, block.timestamp));

        emit Transfer(msg.sender, _receiver, _amount, _message, block.timestamp);
    }

    //function addToLiquidity()

    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }
}

//testing updates
