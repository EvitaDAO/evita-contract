require('@nomiclabs/hardhat-ethers');
require('@nomiclabs/hardhat-etherscan');
require('@openzeppelin/hardhat-upgrades');
require('./scripts/deploy');
require('dotenv').config();
const path = require('path');

function accounts(...names) {
  return names.reduce((accounts, name) => (process.env[name] ? [...accounts, process.env[name]] : accounts), []);
}

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: '0.8.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  paths: {
    deploy: path.resolve(__dirname, './deploy'),
    deployments: path.resolve(__dirname, './deployments'),
  },
  networks: {
    hardhat: {
      initialBaseFeePerGas: 0,
      blockGasLimit: 10000000,
    },
    main: {
      url: process.env.ETH_MAIN_NODE || 'http://127.0.0.1:8545',
      chainId: 1,
      gasPrice: 10_000_000_000,
      blockGasLimit: 6_000_000,
      accounts: accounts(
        'ETH_MAIN_DEPLOYER',
      ),
    },
    ropsten: {
      url: process.env.ROPSTEN_NODE || 'http://127.0.0.1:8545',
      chainId: 3,
      gasPrice: 10_000_000_000,
      blockGasLimit: 6_000_000,
      accounts: accounts('ROPSTEN_DEPLOYER', 'ROPSTEN_OTHER'),
    },
    rinkeby: {
      url: process.env.ETH_RINKEBY_NODE || 'http://127.0.0.1:8545',
      chainId: 4,
      gasPrice: 25_000_000_000,
      blockGasLimit: 6_000_000,
      accounts: accounts(
        'ETH_RINKEBY_DEPLOYER',
      ),
    },
    bsc: {
      url: process.env.BSC_NODE || 'http://127.0.0.1:8545',
      chainId: 56,
      gasPrice: 7_000_000_000,
      blockGasLimit: 6_000_000,
      accounts: accounts('BSC_DEPLOYER'),
    },
    bscTest: {
      url: process.env.BSC_TEST_NODE || 'http://127.0.0.1:8545',
      chainId: 97,
      gasPrice: 10_000_000_000,
      blockGasLimit: 6_000_000,
      accounts: accounts(
        'BSC_TEST_DEPLOYER',
      ),
    },
    avalanche: {
      url: process.env.AVALANCHE_NODE || 'http://127.0.0.1:8545',
      chainId: 43114,
      gasPrice: 25_000_000_000,
      blockGasLimit: 8_000_000,
      accounts: accounts(
        'AVALANCHE_DEPLOYER',
      ),
    },
    avalancheTest: {
      url: process.env.AVALANCHE_TEST_NODE || 'http://127.0.0.1:8545',
      chainId: 43113,
      gasPrice: 50_000_000_000,
      blockGasLimit: 8_000_000,
      accounts: accounts(
        'AVALANCHE_TEST_DEPLOYER',
      ),
    },
    polygon: {
      url: process.env.POLYGON_NODE || 'http://127.0.0.1:8545',
      chainId: 137,
      gasPrice: 30_000_000_000,
      blockGasLimit: 21_000_000,
      accounts: accounts(
        'POLYGON_DEPLOYER',
      ),
    },
    mumbai: {
      url: process.env.POLYGON_MUMBAI_NODE || 'http://127.0.0.1:8545',
      chainId: 80001,
      gasPrice: 30_000_000_000,
      blockGasLimit: 20_000_000,
      accounts: accounts(
        'POLYGON_MUMBAI_DEPLOYER',
      ),
    },
    moonriver: {
      url: process.env.MOONRIVER_NODE || 'http://127.0.0.1:8545',
      chainId: 1285,
      gasPrice: 1_000_000_000,
      blockGasLimit: 15_000_000,
      accounts: accounts(
        'MOONRIVER_DEPLOYER',
      ),
    },
    moonbaseAlpha: {
      url: process.env.MOONBASE_ALPHA_NODE || 'http://127.0.0.1:8545',
      chainId: 1287,
      gasPrice: 1_000_000_000,
      blockGasLimit: 15_000_000,
      accounts: accounts(
        'MOONBASE_ALPHA_DEPLOYER',
      ),
    },
    optimistic: {
      url: process.env.OPTIMISTIC_NODE || 'http://127.0.0.1:8545',
      chainId: 10,
      gasPrice: 1_000_000,
      blockGasLimit: 15_000_000,
      accounts: accounts(
        'OPTIMISTIC_DEPLOYER',
      ),
    },
  },
  namedAccounts: {
    deployer: {
      '': 0,
      'ropsten': 0,
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
};
