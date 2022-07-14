# defihelper-protocol-upgradable

Copy env.template to .env. Fill in variables.

# deploy 

```
npx hardhat deploy --deploy ./deploy/001_token/  --network ropsten --tags Token
```

# verify

```npm run etherscan-verify -- --contract EvitaUpgradable --network ropsten```
