//https://eth-ropsten.alchemyapi.io/v2/CqSq9MGr76-dC_qK4L6RUcl6543P60i-

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/CqSq9MGr76-dC_qK4L6RUcl6543P60i-',
      accounts: ['9d80723fbdecaf0a45bbd58964972c6d7a912ac0ff632609dffb38016f6e1ff8']
    }
  }
}