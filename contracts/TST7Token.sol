pragma solidity >=0.5.0 <0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Mintable.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";



contract TST7 is ERC20, ERC20Detailed, ERC20Burnable, ERC20Mintable {

    
    constructor() ERC20Detailed("Test7", "TST7", 18) public {
    }
}
