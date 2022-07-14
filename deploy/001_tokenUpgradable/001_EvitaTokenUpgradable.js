const { migration } = require('../../scripts/deploy');

module.exports = migration((deployer) => {
  return deployer.deployProxy('contracts/EvitaUpgradable.sol:EvitaUpgradable', {
    name: 'EvitaUpgradable',
  });
});

module.exports.tags = ['TokenUpgradable'];
