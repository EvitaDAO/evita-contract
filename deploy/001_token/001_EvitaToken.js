const { migration } = require('../../scripts/deploy');

module.exports = migration((deployer) => {
  return deployer.deployProxy('contracts/Evita.sol:Evita', {
    name: 'EvitaUpgradable',
  });
});

module.exports.tags = ['Token'];
