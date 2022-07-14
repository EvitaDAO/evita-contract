const { migration } = require('../../scripts/deploy');

module.exports = migration((deployer) => {
  return deployer.deploy('contracts/Evita.sol:Evita', {
    name: 'Evita',
  });
});

module.exports.tags = ['Token'];
